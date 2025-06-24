'use client'
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.3, smoothWheel: true })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // --- Refresh Lenis & ScrollTrigger after all images are loaded ---
    const images = Array.from(document.images)
    if (images.length) {
      let loaded = 0
      images.forEach(img => {
        if (img.complete) {
          loaded++
        } else {
          img.addEventListener('load', () => {
            loaded++
            if (loaded === images.length) {
              lenis.resize()
              ScrollTrigger.refresh()
            }
          })
          img.addEventListener('error', () => {
            loaded++
            if (loaded === images.length) {
              lenis.resize()
              ScrollTrigger.refresh()
            }
          })
        }
      })
      if (loaded === images.length) {
        lenis.resize()
        ScrollTrigger.refresh()
      }
    } else {
      lenis.resize()
      ScrollTrigger.refresh()
    }

    // --- Listen for 3D model loaded event and refresh Lenis & ScrollTrigger ---
    const handleRoomLoaded = () => {
      lenis.resize()
      ScrollTrigger.refresh()
    }
    window.addEventListener("room-loaded", handleRoomLoaded)

    // --- Fallback: refresh after a short timeout ---
    const timeout = setTimeout(() => {
      lenis.resize()
      ScrollTrigger.refresh()
    }, 1200)

    // Cleanup
    return () => {
      window.removeEventListener("room-loaded", handleRoomLoaded)
      clearTimeout(timeout)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}