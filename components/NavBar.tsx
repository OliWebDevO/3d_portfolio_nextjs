'use client'
import { useEffect, useState, useRef, useCallback } from "react"
import Link from "next/link"
import gsap from "gsap"
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import { usePathname } from "next/navigation"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { navLinks, isFrench } = useTranslation()
    const pathname = usePathname()

    const overlayRef = useRef<HTMLDivElement>(null)
    const blobRef = useRef<HTMLDivElement>(null)
    const menuItemsRef = useRef<(HTMLLIElement | null)[]>([])
    const tlRef = useRef<gsap.core.Timeline | null>(null)
    const burgerRef = useRef<HTMLButtonElement>(null)
    const line1Ref = useRef<HTMLSpanElement>(null)
    const line2Ref = useRef<HTMLSpanElement>(null)
    const line3Ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        let lastY = window.scrollY;
        const isMobile = () => window.innerWidth < 768;

        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 10);

            if (isMobile() && !menuOpen) {
                if (currentY > lastY && currentY > 80) {
                    setHidden(true);
                } else {
                    setHidden(false);
                }
            } else {
                setHidden(false);
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

        // First nav item arrives early
        const items = menuItemsRef.current.filter(Boolean)
        if (items.length > 0) {
            tl.fromTo(items[0],
                { x: -80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
                0.5
            )
        }
        // Rest stagger in after
        if (items.length > 1) {
            tl.fromTo(items.slice(1),
                { x: -80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" },
                0.7
            )
        }

        return tl
    }, [])

    const toggleMenu = useCallback(() => {
        if (!menuOpen) {
            setMenuOpen(true)
            setHidden(false)
            const tl = buildTimeline()
            tlRef.current = tl
            tl.timeScale(1)
            tl.play()
            document.body.style.overflow = 'hidden'
        } else {
            if (tlRef.current) {
                tlRef.current.timeScale(1.8)
                tlRef.current.reverse()
            }
        }
    }, [menuOpen, buildTimeline])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
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
    const isHomePage = pathname === '/'

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} ${hidden ? 'nav-hidden' : ''} ${isHomePage ? 'home' : ''} ${menuOpen ? 'menu-open' : ''}`}>
                <div className="inner">
                    {/* Mobile: EN/FR left, Burger right */}
                    <div className="md:hidden">
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
                        {navLinks.filter(({link}) => link !== '#techstack').map(({link, name}, i) => (
                            <li
                                key={link}
                                ref={(el) => { menuItemsRef.current[isProjectPage ? i + 1 : i] = el }}
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
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar
