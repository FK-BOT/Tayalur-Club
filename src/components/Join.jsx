import React from 'react';
import { motion } from 'framer-motion';

const Join = () => {
    return (
        <section id="join" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: 'var(--gradient-main)',
                        borderRadius: '24px',
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative rings */}
                    <div style={{
                        position: 'absolute', top: -50, left: -50, width: 200, height: 200,
                        border: '2px solid rgba(255,255,255,0.1)', borderRadius: '50%'
                    }} />
                    <div style={{
                        position: 'absolute', bottom: -50, right: -50, width: 300, height: 300,
                        border: '2px solid rgba(255,255,255,0.1)', borderRadius: '50%'
                    }} />

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                        Ready to be part of the Legacy?
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#e0e0e0', position: 'relative', zIndex: 1 }}>
                        Join The Tayalur Club today to connect, collaborate, and contribute to our thriving community.
                    </p>

                    <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'white',
                            color: 'var(--primary)',
                            padding: '16px 48px',
                            borderRadius: '50px',
                            fontWeight: '700',
                            fontSize: '1.1rem',
                            display: 'inline-block',
                            transition: '0.3s',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Join The Club
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Join;
