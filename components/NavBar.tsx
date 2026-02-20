'use client'
import { useEffect, useState, useRef, useCallback } from "react"
import type { ChangeEvent, FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import { usePathname, useRouter } from "next/navigation"

const projectBubbles = [
    { src: '/images/annick1.webp', srcMobile: '/images/slider-mobile/annick.webp', slug: 'annick', label: 'Annick', bg: '#1c1c21' },
    { src: '/images/fanal_des_chats/fanal_home.webp', srcMobile: '/images/slider-mobile/fanal.webp', slug: 'fanal', label: 'Fanal', bg: '#ffefdb' },
    { src: '/images/lenoyer1.webp', srcMobile: '/images/slider-mobile/lenoyer.webp', slug: 'lenoyer', label: 'Le Noyer', bg: 'white' },
    { src: '/images/asbl_ovni/ovni_dashboard.webp?v=2', srcMobile: '/images/slider-mobile/ovni-compta.webp', slug: 'ovni-compta', label: 'OVNI', bg: '#ffefdb' },
]

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t, navLinks, isFrench } = useTranslation()
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

    // Desktop contact overlay refs
    const headerRef = useRef<HTMLElement>(null)
    const contactBtnRef = useRef<HTMLButtonElement>(null)
    const logoRef = useRef<HTMLAnchorElement>(null)
    const desktopNavRef = useRef<HTMLElement>(null)
    const desktopLangRef = useRef<HTMLDivElement>(null)
    const desktopOverlayRef = useRef<HTMLDivElement>(null)
    const desktopBlobRef = useRef<HTMLDivElement>(null)
    const desktopBubblesRef = useRef<(HTMLAnchorElement | null)[]>([])
    const desktopBubblesPanelRef = useRef<HTMLDivElement | null>(null)
    const desktopFormRef = useRef<HTMLDivElement | null>(null)
    const projectsTitleRef = useRef<HTMLHeadingElement | null>(null)
    const contactTitleRef = useRef<HTMLHeadingElement | null>(null)
    const dtlRef = useRef<gsap.core.Timeline | null>(null)
    const [desktopContactOpen, setDesktopContactOpen] = useState(false)

    // Contact form state
    const [contactForm, setContactForm] = useState({ name: '', subject: '', message: '' })
    const [honeypot, setHoneypot] = useState('')
    const [contactLoading, setContactLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

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

    // Contact form handlers
    const handleContactChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setContactForm(prev => ({ ...prev, [name]: value }))
    }

    const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (honeypot) {
            setContactForm({ name: '', subject: '', message: '' })
            return
        }
        setContactLoading(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm),
            })
            if (!response.ok) throw new Error('Failed to send')
            setContactForm({ name: '', subject: '', message: '' })
            setShowSuccess(true)
        } catch (error) {
            console.error('Contact Error:', error)
        } finally {
            setContactLoading(false)
        }
    }

    // Desktop contact overlay timeline
    const buildDesktopTimeline = useCallback(() => {
        const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power3.inOut" },
            onReverseComplete: () => {
                setDesktopContactOpen(false)
                document.body.style.overflow = ''
                // Clear GSAP inline styles so CSS classes take control again
                if (headerRef.current) gsap.set(headerRef.current, { clearProps: 'backgroundColor' })
                if (desktopNavRef.current) gsap.set(desktopNavRef.current, { clearProps: 'all' })
                // Clear logo letter styles + restore white color
                if (logoRef.current) {
                    const logoLetters = logoRef.current.querySelectorAll('span')
                    gsap.set(logoLetters, { clearProps: 'all' })
                    gsap.set(logoRef.current, { clearProps: 'color' })
                }
                if (pendingNavRef.current) {
                    const dest = pendingNavRef.current
                    pendingNavRef.current = null
                    router.push(dest)
                }
            },
        })

        // Header bg fades to transparent
        if (headerRef.current) {
            tl.to(headerRef.current, { backgroundColor: 'transparent', duration: 0.3, ease: "power2.in" }, 0)
        }

        // Nav elements disappear organically
        if (desktopNavRef.current) {
            tl.to(desktopNavRef.current, { y: -30, opacity: 0, duration: 0.35, ease: "power3.in" }, 0.05)
        }

        // Logo letters slide down to hide, then change color to black
        if (logoRef.current) {
            const logoLetters = logoRef.current.querySelectorAll('span')
            if (logoLetters.length > 0) {
                tl.to(logoLetters, { y: '100%', duration: 0.3, ease: "power3.in" }, 0)
            }
            tl.set(logoRef.current, { color: '#000' }, 0.35)
        }

        // Blob scales up organically
        tl.fromTo(desktopBlobRef.current,
            { scale: 0, opacity: 1 },
            { scale: 1, duration: 1.4, ease: "power2.out" },
            0.1
        )

        // Make panel visible (container only, children still hidden)
        if (desktopBubblesPanelRef.current) {
            tl.set(desktopBubblesPanelRef.current, { opacity: 1 }, 0.4)
        }

        // Animate cards + form born from center
        const bubbles = desktopBubblesRef.current.filter(Boolean)
        const firstBubble = bubbles[0]
        const restBubbles = bubbles.slice(1)

        // Form + first card born from center simultaneously
        if (desktopFormRef.current) {
            tl.fromTo(desktopFormRef.current,
                { x: -80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                0.4
            )
        }
        if (firstBubble) {
            tl.fromTo(firstBubble,
                { x: 80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                0.4
            )
        }

        // Logo letters stagger back in
        if (logoRef.current) {
            const logoLetters = logoRef.current.querySelectorAll('span')
            if (logoLetters.length > 0) {
                tl.fromTo(logoLetters,
                    { y: '100%' },
                    { y: '0%', duration: 0.5, stagger: 0.02, ease: "power3.out" },
                    0.4
                )
            }
        }

        // "Projets" title — letter stagger, same time as first card
        if (projectsTitleRef.current) {
            const letters = projectsTitleRef.current.querySelectorAll('span')
            if (letters.length > 0) {
                tl.fromTo(letters,
                    { y: '100%', opacity: 0 },
                    { y: '0%', opacity: 1, duration: 0.5, stagger: 0.03, ease: "power3.out" },
                    0.4
                )
            }
        }

        // "Contact" title — letter stagger, same time as form
        if (contactTitleRef.current) {
            const letters = contactTitleRef.current.querySelectorAll('span')
            if (letters.length > 0) {
                tl.fromTo(letters,
                    { y: '100%', opacity: 0 },
                    { y: '0%', opacity: 1, duration: 0.5, stagger: 0.03, ease: "power3.out" },
                    0.4
                )
            }
        }

        // Remaining cards stagger from center to left
        if (restBubbles.length > 0) {
            tl.fromTo(restBubbles,
                { x: 80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out" },
                0.55
            )
        }

        return tl
    }, [router])

    const toggleDesktopContact = useCallback(() => {
        if (!desktopContactOpen) {
            setDesktopContactOpen(true)
            const tl = buildDesktopTimeline()
            dtlRef.current = tl
            tl.timeScale(1)
            tl.play()
            document.body.style.overflow = 'hidden'
        } else {
            if (dtlRef.current) {
                dtlRef.current.timeScale(1.8)
                dtlRef.current.reverse()
            }
        }
    }, [desktopContactOpen, buildDesktopTimeline])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        // For page-navigating links, defer navigation until animation finishes
        if (link.startsWith('/') && menuOpen && tlRef.current) {
            e.preventDefault()
            pendingNavRef.current = link
            tlRef.current.timeScale(1.8)
            tlRef.current.reverse()
            return
        }

        // Desktop overlay bubble clicks
        if (link.startsWith('/') && desktopContactOpen && dtlRef.current) {
            e.preventDefault()
            pendingNavRef.current = link
            dtlRef.current.timeScale(1.8)
            dtlRef.current.reverse()
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

    const handleBubbleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const img = e.currentTarget.querySelector('img')
        if (img) {
            gsap.to(img, {
                padding: 0,
                borderWidth: 0,
                borderRadius: 12,
                duration: 0.4,
                ease: "power3.out",
            })
        }
    }

    const handleBubbleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const img = e.currentTarget.querySelector('img')
        if (img) {
            gsap.to(img, {
                padding: 12,
                borderWidth: 1,
                borderRadius: 12,
                duration: 0.4,
                ease: "power3.out",
            })
        }
    }

    const isProjectPage = pathname?.startsWith('/projects/')
    isProjectPageRef.current = !!isProjectPage
    const isHomePage = pathname === '/'

    return (
        <>
            <header ref={headerRef} className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} ${isHomePage ? 'home' : ''} ${menuOpen || desktopContactOpen ? 'menu-open' : ''}`}>
                <div className="inner">
                    {/* Mobile: EN/FR left, Burger right */}
                    <div ref={langRef} className="md:hidden">
                        <LanguageSwitcher />
                    </div>

                    <Link
                        ref={logoRef}
                        className={`logo ${isHomePage ? 'hidden md:block' : 'hidden md:block'} overflow-hidden`}
                        href="/#hero"
                        onClick={(e) => {
                            if (desktopContactOpen && dtlRef.current) {
                                e.preventDefault()
                                pendingNavRef.current = '/#hero'
                                dtlRef.current.timeScale(1.8)
                                dtlRef.current.reverse()
                            }
                        }}
                    >
                        {'Oliver Van Droogenbroeck'.split('').map((letter, i) => (
                            <span key={i} className="inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
                        ))}
                    </Link>
                    <nav ref={desktopNavRef} className="desktop">
                        <ul>
                            {navLinks.filter(({link}) => link !== '#contact').map(({link, name}) => (
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
                        <div ref={desktopLangRef} className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Contact button — desktop only */}
                        <button
                            ref={contactBtnRef}
                            className={`contact-btn hidden lg:flex group ${desktopContactOpen ? 'open' : ''}`}
                            onClick={toggleDesktopContact}
                        >
                            <div className="inner">
                                <span>{desktopContactOpen ? (isFrench ? 'Retour' : 'Back') : 'Contact'}</span>
                            </div>
                        </button>

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
                                                        src={bubble.srcMobile}
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

            {/* Desktop fullscreen contact overlay */}
            <div
                ref={desktopOverlayRef}
                className="fixed inset-0 z-[105] hidden lg:block pointer-events-none overflow-hidden"
            >
                {/* Organic blob background */}
                <div
                    ref={desktopBlobRef}
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

                {/* Content: centered wrapper */}
                <div className={`relative z-10 flex h-full items-center justify-center px-20 ${desktopContactOpen ? 'pointer-events-auto' : ''}`}>
                    {/* Inner row: fixed-width bubble column + form */}
                    <div className="flex items-stretch gap-4">
                        {/* Project column: title + cards */}
                        <div className="flex flex-col justify-between">
                            <h2
                                ref={(el) => { projectsTitleRef.current = el }}
                                className="text-black text-4xl font-bold overflow-hidden text-right mb-4"
                            >
                                {(isFrench ? 'Projets' : 'Work').split('').map((letter, i) => (
                                    <span key={i} className="inline-block translate-y-full opacity-0">{letter}</span>
                                ))}
                            </h2>
                            <div
                                ref={(el) => { desktopBubblesPanelRef.current = el }}
                                className="flex flex-col justify-between flex-1 opacity-0"
                            >
                            {projectBubbles.map((bubble, i) => (
                                <Link
                                    key={bubble.slug}
                                    href={`/projects/${bubble.slug}`}
                                    ref={(el) => { desktopBubblesRef.current[i] = el }}
                                    className="image-wrapper group relative overflow-hidden rounded-xl opacity-0 cursor-pointer w-[200px]"
                                    style={{ background: bubble.bg }}
                                    onClick={(e) => handleNavClick(e, `/projects/${bubble.slug}`)}
                                    onMouseEnter={handleBubbleMouseEnter}
                                    onMouseLeave={handleBubbleMouseLeave}
                                    aria-label={bubble.label}
                                >
                                    <Image
                                        src={bubble.src}
                                        alt={bubble.label}
                                        width={600}
                                        height={400}
                                        quality={80}
                                        sizes="200px"
                                        className="rounded-xl card-border p-3 block"
                                        style={{ color: 'transparent' }}
                                    />
                                </Link>
                            ))}
                            </div>
                        </div>

                        {/* Contact: form + title */}
                        <div ref={desktopFormRef} className="relative w-[520px] opacity-0">
                        <div className="card-border rounded-xl p-8 w-full">
                            <form
                                onSubmit={handleContactSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                {/* Honeypot */}
                                <div className="absolute -left-[9999px]" aria-hidden="true">
                                    <input
                                        type="text"
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nav-name">{t.contact.name}</label>
                                    <input
                                        type="text"
                                        id="nav-name"
                                        name="name"
                                        value={contactForm.name}
                                        onChange={handleContactChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nav-subject">{t.contact.subject}</label>
                                    <select
                                        id="nav-subject"
                                        name="subject"
                                        value={contactForm.subject}
                                        onChange={handleContactChange}
                                        required
                                        suppressHydrationWarning
                                        className="w-full px-4 py-4 text-base bg-blue-100 rounded-md text-white-50"
                                    >
                                        <option value="" suppressHydrationWarning>{t.contact.subjectPlaceholder}</option>
                                        {t.contact.scenarios.map((scenario: string) => (
                                            <option key={scenario} value={scenario}>{scenario}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="nav-message">{t.contact.message}</label>
                                    <textarea
                                        id="nav-message"
                                        name="message"
                                        value={contactForm.message}
                                        onChange={handleContactChange}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {contactLoading ? t.contact.sending : t.contact.send}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <Image src="/images/arrow-down.svg" alt="arrow" width={24} height={24} />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                        <h2
                            ref={(el) => { contactTitleRef.current = el }}
                            className="absolute left-full bottom-0 ml-4 text-black text-4xl font-bold overflow-hidden whitespace-nowrap"
                        >
                            {'Contact'.split('').map((letter, i) => (
                                <span key={i} className="inline-block translate-y-full opacity-0">{letter}</span>
                            ))}
                        </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {showSuccess && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80"
                    onClick={() => setShowSuccess(false)}
                >
                    <div
                        className="bg-black-100 border border-black-50 rounded-2xl p-8 mx-4 max-w-md text-center shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
                        <p className="text-white-50 mb-6">{t.contact.successMessage}</p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            {t.contact.close}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar
