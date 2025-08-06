'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'
import { usePathname } from "next/navigation"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { navLinks } = useTranslation() 
    const pathname = usePathname()
    // const { t, navLinks } = useTranslation() 
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const isProjectPage = pathname?.startsWith('/projects/')

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
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