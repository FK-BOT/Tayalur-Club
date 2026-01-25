import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../index.css';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
        { title: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scroll || isOpen ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scroll || isOpen ? 'blur(10px)' : 'none',
                borderBottom: scroll || isOpen ? '1px solid var(--glass-border)' : 'none',
                padding: scroll ? '1rem 0' : '1.5rem 0'
            }}
            className="navbar"
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo Area */}
                <div
                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', zIndex: 1001, cursor: 'pointer' }}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                    }}
                >
                    <img src={logo} alt="Tayalur Club" style={{ height: '50px', objectFit: 'contain' }} />
                    <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        letterSpacing: '1px',
                        color: 'var(--text-main)',
                        whiteSpace: 'nowrap',
                        fontFamily: "'Outfit', sans-serif"
                    }}></span>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu} style={{ zIndex: 1001, cursor: 'pointer' }}>
                    <div style={{
                        width: '30px',
                        height: '3px',
                        backgroundColor: 'white',
                        marginBottom: '6px',
                        transition: '0.3s',
                        transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
                    }}></div>
                    <div style={{
                        width: '30px',
                        height: '3px',
                        backgroundColor: 'white',
                        marginBottom: '6px',
                        opacity: isOpen ? 0 : 1,
                        transition: '0.3s'
                    }}></div>
                    <div style={{
                        width: '30px',
                        height: '3px',
                        backgroundColor: 'white',
                        transition: '0.3s',
                        transform: isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'
                    }}></div>
                </div>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        gap: '2rem'
                    }}>
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px'
                                    }}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
