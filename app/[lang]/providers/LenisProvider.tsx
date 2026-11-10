'use client'
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Links like /fr#work (e.g. in emails): the target section is rendered client-side and
    // Lenis owns the scroll, so the browser's native anchor jump never happens. Wait for the
    // section, let ScrollTrigger settle, then scroll to it.
    let hashTimer: ReturnType<typeof setTimeout> | undefined
    const hash = window.location.hash.slice(1)
    if (hash) {
      const started = Date.now()
      const findTarget = () => {
        const target = document.getElementById(decodeURIComponent(hash))
        if (target) {
          hashTimer = setTimeout(() => {
            ScrollTrigger.refresh()
            if (lenisRef.current) lenisRef.current.scrollTo(target, { immediate: true })
            else target.scrollIntoView()
          }, 800)
        } else if (Date.now() - started < 6000) {
          hashTimer = setTimeout(findTarget, 100)
        }
      }
      findTarget()
    }

    // Disable Lenis on mobile - native scroll works fine and saves CPU
    if (window.innerWidth < 768) return () => clearTimeout(hashTimer);

    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1.2,
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

    // --- Fallback refreshes for async/dynamic content ---
    const timeouts = [500, 1500, 3000].map(delay =>
      setTimeout(debouncedRefresh, delay)
    )

    // Cleanup
    return () => {
      clearTimeout(hashTimer)
      clearTimeout(refreshTimeout)
      timeouts.forEach(clearTimeout)
      gsap.ticker.remove(lenis.raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}