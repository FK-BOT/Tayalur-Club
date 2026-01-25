import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, #001f4d 0%, #050510 100%)'
        }}>
            {/* Abstract Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'var(--primary)',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.2
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'purple',
                borderRadius: '50%',
                filter: 'blur(150px)',
                opacity: 0.15
            }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        display: 'block',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        color: 'var(--primary-glow)'
                    }}>
                        Welcome to
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        THE <span className="text-gradient">TAYALUR</span> CLUB
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        color: 'var(--text-muted)'
                    }}>
                        "Our Roots. Our Legacy. Our Future."
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#join" className="btn-primary">Join The Community</a>
                        <a href="#about" style={{
                            padding: '12px 32px',
                            borderRadius: '50px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            backdropFilter: 'blur(4px)',
                            transition: '0.3s'
                        }}>Learn More</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
