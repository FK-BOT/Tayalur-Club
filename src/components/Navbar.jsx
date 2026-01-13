import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../index.css';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#' },
        { title: 'About', href: '#about' },
        { title: 'Activities', href: '#activities' },
        { title: 'Gallery', href: '#gallery' },
        { title: 'Join Us', href: '#join' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scroll ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scroll ? 'blur(10px)' : 'none',
                borderBottom: scroll ? '1px solid var(--glass-border)' : 'none',
                padding: scroll ? '1rem 0' : '1.5rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo Area */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', zIndex: 1001 }}>
                    <img src={logo} alt="Tayalur Club" style={{ height: '40px', objectFit: 'contain' }} />
                    <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        color: 'var(--text-main)',
                        whiteSpace: 'nowrap'
                    }}>TAYALUR CLUB</span>
                </div>

                {/* Desktop Menu - Hidden on Mobile via CSS */}
                <ul className="nav-desktop nav-links" style={{ alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <a
                                href={link.href}
                                style={{
                                    color: 'var(--text-main)',
                                    fontWeight: '500',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    transition: 'color 0.3s'
                                }}
                                className="hover-effect"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
