'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import { usePathname } from "next/navigation"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const { navLinks } = useTranslation()
    const pathname = usePathname()

    useEffect(() => {
        let lastY = window.scrollY;
        const isMobile = () => window.innerWidth < 768;

        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 10);

            // Hide/show on scroll direction — mobile only
            if (isMobile()) {
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
    }, [])

    const isProjectPage = pathname?.startsWith('/projects/')

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} ${hidden ? 'nav-hidden' : ''}`}>
        <div className="inner">
            <Link className="logo" href="/#hero">
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
                {/* <Link href="#contact" className="contact-btn group nav-contact">
                    <div className="inner">
                        <span>{t.nav.contact}</span>
                    </div>
                </Link> */}
                <LanguageSwitcher />
            </div>
        </div>
    </header>
  )
}

export default NavBar