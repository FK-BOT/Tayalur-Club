import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Using logo as the image for now as requested

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="grid-mobile-1">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story <span className="text-gradient">& Heritage</span></h2>
                        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
                            The Tayalur Club brings together members of the Tayalur Muslim community, known for their hard work, cultural pride, and strong sense of community. Originating from Tayalur, near Mulbagal in Kolar District, Karnataka, the community has spread far beyond their hometown.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
                            Despite Mulbagal being a larger and more flourishing town, it is the Tayalur Muslims who have truly stood out for their exceptional contributions in business, trade, and social welfare. Today, Tayalur Muslims are spreading across the globe, establishing themselves in Saudi Arabia, the Gulf, Europe, the US, UK, Canada, and South Africa.
                        </p>
                        <blockquote style={{
                            borderLeft: '4px solid var(--primary)',
                            paddingLeft: '1.5rem',
                            fontStyle: 'italic',
                            color: 'white',
                            margin: '2rem 0',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '1.5rem'
                        }}>
                            "Tayalur ka Musalmaan, Built on Imaan. Grown with Vision."
                            <br />
                            <span style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem', display: 'block' }}>
                                — The Muslim of Tayalur, their presence is everywhere.
                            </span>
                        </blockquote>
                    </motion.div>

                    {/* Image/Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{
                            background: 'var(--glass-bg)',
                            padding: '3rem',
                            borderRadius: '20px',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 0 50px rgba(0, 71, 171, 0.2)'
                        }}>
                            <img src={logo} alt="Tayalur Community" style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
