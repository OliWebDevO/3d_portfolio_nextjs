'use client'
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1.2,
      syncTouch: true
    })
    lenisRef.current = lenis

    // Sync Lenis with GSAP ticker for smooth ScrollTrigger integration
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Debounced refresh function
    let refreshTimeout: NodeJS.Timeout
    const debouncedRefresh = () => {
      clearTimeout(refreshTimeout)
      refreshTimeout = setTimeout(() => {
        lenis.resize()
        ScrollTrigger.refresh()
      }, 150)
    }

    // --- Refresh after images load ---
    const images = Array.from(document.images)
    if (images.length) {
      let loaded = 0
      const checkAllLoaded = () => {
        loaded++
        if (loaded === images.length) {
          debouncedRefresh()
        }
      }
      images.forEach(img => {
        if (img.complete) {
          checkAllLoaded()
        } else {
          img.addEventListener('load', checkAllLoaded)
          img.addEventListener('error', checkAllLoaded)
        }
      })
    }

    // --- Listen for 3D model loaded events ---
    window.addEventListener("room-loaded", debouncedRefresh)
    window.addEventListener("model-loaded", debouncedRefresh)

    // --- Fallback refreshes for async content ---
    const timeouts = [500, 1500, 3500].map(delay =>
      setTimeout(debouncedRefresh, delay)
    )

    // Cleanup
    return () => {
      clearTimeout(refreshTimeout)
      timeouts.forEach(clearTimeout)
      window.removeEventListener("room-loaded", debouncedRefresh)
      window.removeEventListener("model-loaded", debouncedRefresh)
      gsap.ticker.remove(lenis.raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}