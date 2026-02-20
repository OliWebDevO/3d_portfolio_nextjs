'use client'
import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import { usePathname, useRouter } from "next/navigation"

const projectBubbles = [
    { src: '/images/slider-mobile/annick.webp', slug: 'annick', label: 'Annick' },
    { src: '/images/slider-mobile/fanal.webp', slug: 'fanal', label: 'Fanal' },
    { src: '/images/slider-mobile/lenoyer.webp', slug: 'lenoyer', label: 'Le Noyer' },
    { src: '/images/slider-mobile/ovni-compta.webp', slug: 'ovni-compta', label: 'OVNI' },
]

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { navLinks, isFrench } = useTranslation()
    const pathname = usePathname()
    const router = useRouter()
    const pendingNavRef = useRef<string | null>(null)

    const overlayRef = useRef<HTMLDivElement>(null)
    const blobRef = useRef<HTMLDivElement>(null)
    const menuItemsRef = useRef<(HTMLLIElement | null)[]>([])
    const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([])
    const bubblesPanelRef = useRef<HTMLDivElement | null>(null)
    const tlRef = useRef<gsap.core.Timeline | null>(null)
    const burgerRef = useRef<HTMLButtonElement>(null)
    const line1Ref = useRef<HTMLSpanElement>(null)
    const line2Ref = useRef<HTMLSpanElement>(null)
    const line3Ref = useRef<HTMLSpanElement>(null)
    const langRef = useRef<HTMLDivElement>(null)
    const scrollStateRef = useRef<'visible' | 'burger-only'>('visible')
    const isProjectPageRef = useRef(false)

    useEffect(() => {
        let lastY = window.scrollY;
        const isMobile = () => window.innerWidth < 768;

        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 10);

            if (isMobile() && !menuOpen) {
                if (currentY > lastY && currentY > 80 && scrollStateRef.current === 'visible') {
                    // Scroll down past 80px: slide lang left
                    gsap.to(langRef.current, {
                        x: -100, opacity: 0, duration: 0.4, ease: "power3.inOut"
                    })
                    scrollStateRef.current = 'burger-only'
                } else if (currentY <= 80 && scrollStateRef.current === 'burger-only') {
                    // Scroll back to top: bring lang back
                    gsap.to(langRef.current, {
                        x: 0, opacity: 1, duration: 0.3, ease: "power3.out"
                    })
                    scrollStateRef.current = 'visible'
                }
            }

            lastY = currentY;
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen])

    const buildTimeline = useCallback(() => {
        const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power3.inOut" },
            onReverseComplete: () => {
                setMenuOpen(false)
                document.body.style.overflow = ''
                // If scrolled past 80px, keep lang hidden
                if (window.scrollY > 80 && langRef.current) {
                    gsap.set(langRef.current, { x: -100, opacity: 0 })
                    scrollStateRef.current = 'burger-only'
                }
                // Navigate after animation completes
                if (pendingNavRef.current) {
                    const dest = pendingNavRef.current
                    pendingNavRef.current = null
                    router.push(dest)
                }
            },
        })

        // Burger to X
        tl.to(line2Ref.current, { opacity: 0, duration: 0.3 }, 0)
        tl.to(line1Ref.current, { y: 7, rotation: 45, duration: 0.4 }, 0.15)
        tl.to(line3Ref.current, { y: -7, rotation: -45, duration: 0.4 }, 0.15)

        // Blob scales up organically from burger corner
        tl.fromTo(blobRef.current,
            { scale: 0, opacity: 1 },
            { scale: 1, duration: 1.4, ease: "power2.out" },
            0.2
        )

        // Lang switcher appears with first nav item (only if it was hidden)
        if (langRef.current && scrollStateRef.current === 'burger-only') {
            tl.fromTo(langRef.current,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
                0.5
            )
        }

        const items = menuItemsRef.current.filter(Boolean)
        const bubbles = bubblesRef.current.filter(Boolean)
        const onProject = isProjectPageRef.current

        // How many items come before the bubbles:
        // Project pages: Accueil (0) → Projets (1) → bubbles → rest
        // Home: Projets (0) → bubbles → rest
        const beforeBubbles = onProject ? 2 : 1
        let t = 0.5

        // Items before bubbles stagger in
        items.slice(0, beforeBubbles).forEach((item) => {
            tl.fromTo(item,
                { x: -80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
                t
            )
            t += 0.2
        })

        // Panel appears with first bubble
        if (bubblesPanelRef.current) {
            tl.fromTo(bubblesPanelRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
                t
            )
        }

        // Project bubbles stagger in
        if (bubbles.length > 0) {
            tl.fromTo(bubbles,
                { y: 20, opacity: 0, scale: 0.5 },
                { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" },
                t
            )
        }

        // Remaining nav items join the same stagger rhythm as bubbles
        const afterItems = items.slice(beforeBubbles)
        if (afterItems.length > 0) {
            tl.fromTo(afterItems,
                { x: -80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" },
                t + 0.1
            )
        }

        return tl
    }, [])

    const toggleMenu = useCallback(() => {
        if (!menuOpen) {
            setMenuOpen(true)
            const tl = buildTimeline()
            tlRef.current = tl
            tl.timeScale(1)
            tl.play()
            document.body.style.overflow = 'hidden'
            scrollStateRef.current = 'visible'
        } else {
            if (tlRef.current) {
                tlRef.current.timeScale(1.8)
                tlRef.current.reverse()
            }
        }
    }, [menuOpen, buildTimeline])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        // For page-navigating links, defer navigation until animation finishes
        if (link.startsWith('/') && menuOpen && tlRef.current) {
            e.preventDefault()
            pendingNavRef.current = link
            tlRef.current.timeScale(1.8)
            tlRef.current.reverse()
            return
        }

        if (menuOpen && tlRef.current) {
            tlRef.current.timeScale(1.8)
            tlRef.current.reverse()
        }

        // On mobile, scroll to the form itself for contact
        if (link === '#contact' && window.innerWidth < 768) {
            e.preventDefault()
            const formEl = document.getElementById('contact-form')
            if (formEl) {
                setTimeout(() => {
                    formEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 800)
            }
        }
    }

    const isProjectPage = pathname?.startsWith('/projects/')
    isProjectPageRef.current = !!isProjectPage
    const isHomePage = pathname === '/'

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} ${isHomePage ? 'home' : ''} ${menuOpen ? 'menu-open' : ''}`}>
                <div className="inner">
                    {/* Mobile: EN/FR left, Burger right */}
                    <div ref={langRef} className="md:hidden">
                        <LanguageSwitcher />
                    </div>

                    <Link className={`logo ${isHomePage ? 'hidden md:block' : 'hidden md:block'}`} href="/#hero">
                        Oliver Van Droogenbroeck
                    </Link>
                    <nav className="desktop">
                        <ul>
                            {navLinks.map(({link, name}) => (
                                <li key={name}>
                                    <Link href={isProjectPage ? `/${link}` : link} className="group">
                                        <span>{name}</span>
                                        <span className="underline"/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Burger button — mobile only */}
                        <button
                            ref={burgerRef}
                            className={`burger-btn md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg transition-colors duration-300 ${
                                menuOpen
                                    ? 'border border-black-300/30 bg-black'
                                    : 'bg-white'
                            }`}
                            onClick={toggleMenu}
                            aria-label="Menu"
                        >
                            <span ref={line1Ref} className={`block w-5 h-[2px] origin-center transition-colors duration-300 ${menuOpen ? 'bg-white' : 'bg-black'}`} />
                            <span ref={line2Ref} className={`block w-5 h-[2px] origin-center transition-colors duration-300 ${menuOpen ? 'bg-white' : 'bg-black'}`} />
                            <span ref={line3Ref} className={`block w-5 h-[2px] origin-center transition-colors duration-300 ${menuOpen ? 'bg-white' : 'bg-black'}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile fullscreen overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[105] md:hidden pointer-events-none overflow-hidden"
            >
                {/* Organic blob background */}
                <div
                    ref={blobRef}
                    className="absolute bg-white"
                    style={{
                        width: '250vmax',
                        height: '250vmax',
                        top: '-100vmax',
                        right: '-100vmax',
                        borderRadius: '43% 57% 69% 31% / 34% 65% 35% 66%',
                        transform: 'scale(0)',
                    }}
                />

                {/* Menu content */}
                <nav className={`relative z-10 flex flex-col justify-center items-start h-full px-10 ${menuOpen ? 'pointer-events-auto' : ''}`}>
                    <ul className="flex flex-col gap-6">
                        {isProjectPage && (
                            <li
                                ref={(el) => { menuItemsRef.current[0] = el }}
                                className={menuOpen ? '' : 'opacity-0'}
                            >
                                <Link
                                    href="/"
                                    className="text-black text-4xl font-bold hover:text-black-300 transition-colors duration-200"
                                    onClick={(e) => handleNavClick(e, '/')}
                                >
                                    {isFrench ? 'Accueil' : 'Home'}
                                </Link>
                            </li>
                        )}
                        {(() => {
                            const filtered = navLinks.filter(({link}) => {
                                if (link === '#techstack' || link === '#skills') return false
                                return true
                            })
                            const offset = isProjectPage ? 1 : 0
                            const first = filtered[0]
                            const rest = filtered.slice(1)
                            return (
                                <>
                                    {first && (
                                        <li
                                            key={first.link}
                                            ref={(el) => { menuItemsRef.current[offset] = el }}
                                            className={menuOpen ? '' : 'opacity-0'}
                                        >
                                            <Link
                                                href={isProjectPage ? `/${first.link}` : first.link}
                                                className="text-black text-4xl font-bold hover:text-black-300 transition-colors duration-200"
                                                onClick={(e) => handleNavClick(e, first.link)}
                                            >
                                                {first.name}
                                            </Link>
                                        </li>
                                    )}
                                    <li className={`-mt-3 ml-2 ${menuOpen ? '' : 'opacity-0'}`}>
                                        <div
                                            ref={(el) => { bubblesPanelRef.current = el }}
                                            className="inline-flex gap-2.5 bg-black-100 rounded-full px-3 py-1.5 opacity-0"
                                        >
                                            {projectBubbles.map((bubble, i) => (
                                                <Link
                                                    key={bubble.slug}
                                                    href={`/projects/${bubble.slug}`}
                                                    ref={(el) => { bubblesRef.current[i] = el }}
                                                    className="block w-7 h-7 rounded-full overflow-hidden opacity-0"
                                                    onClick={(e) => handleNavClick(e, `/projects/${bubble.slug}`)}
                                                    aria-label={bubble.label}
                                                >
                                                    <Image
                                                        src={bubble.src}
                                                        alt={bubble.label}
                                                        width={28}
                                                        height={28}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                    {rest.map(({link, name}, i) => (
                                        <li
                                            key={link}
                                            ref={(el) => { menuItemsRef.current[offset + 1 + i] = el }}
                                            className={menuOpen ? '' : 'opacity-0'}
                                        >
                                            <Link
                                                href={isProjectPage ? `/${link}` : link}
                                                className="text-black text-4xl font-bold hover:text-black-300 transition-colors duration-200"
                                                onClick={(e) => handleNavClick(e, link)}
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </>
                            )
                        })()}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar
