'use client'
import { useEffect, useState } from "react"
import { navLinks } from "../constants"
import Link from "next/link"

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false)
    
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
                            <Link href={`/${link}`} className="group">
                                <span>{name}</span>
                                <span className="underline"/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Link href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact </span>
                </div>
            </Link>
        </div>
    </header>
  )
}

export default NavBar