import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; // Using logo as the image for now as requested

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-dark)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }} className="grid-mobile-1">
                    {/* Text Content - Our Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story <span className="text-gradient">& Heritage</span></h2>
                        <p style={{ marginBottom: '1rem', color: '#ccc', lineHeight: '1.8' }}>
                            The Tayalur Club brings together members of the Tayalur Muslim community, known for its hard work, cultural pride, and strong sense of unity. Originating from Tayalur, near Mulbagal in Kolar District, Karnataka, the community has grown far beyond its hometown.
                        </p>
                        <p style={{ marginBottom: '1rem', color: '#ccc', lineHeight: '1.8' }}>
                            While Mulbagal developed into a larger and more prominent town, the Tayalur Muslim community has distinguished itself through remarkable achievements in business, trade, and social welfare. Their commitment to progress, integrity, and mutual support has helped them thrive wherever they have settled.
                        </p>
                        <p style={{ marginBottom: '1rem', color: '#ccc', lineHeight: '1.8' }}>
                            Today, the Tayalur Muslim community has expanded across the globe, with members established in Saudi Arabia, the Gulf countries, Europe, the United States, the United Kingdom, Canada, and South Africa.
                        </p>
                        <p style={{ marginBottom: '1rem', color: '#ccc', lineHeight: '1.8' }}>
                            The Tayalur Club is proudly formed by the fourth generation of families rooted to Tayalur, carrying forward the values, heritage, and legacy of their ancestors. The club serves as a platform to connect all those who trace their roots to Tayalur, bringing together families across generations and geographies. Through this connection, the club aims to preserve traditions, strengthen bonds, support one another, and inspire future generations, ensuring that the spirit of Tayalur continues to flourish worldwide.
                        </p>
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

                {/* Mission & Vision Section */}
                <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Mission Statement</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            To promote the advancement, upliftment, unity, welfare, and well-being of all Tayalur Muslims, in accordance with Islamic principles, while fostering social responsibility and mutual support within the community.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ background: 'var(--glass-bg)', padding: '2rem', borderRadius: '15px', border: '1px solid var(--glass-border)' }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>Vision Statement</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            The Tayalur Club (TTC) envisions a world where Tayalur Muslims, enriched by education, health, stability, and dignity, lead meaningful lives that inspire harmony, progress, and positive change in society.
                        </p>
                    </motion.div>
                </div>

                {/* Heritage & Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginTop: '4rem', textAlign: 'center', maxWidth: '900px', marginInline: 'auto' }}
                >
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', marginTop: '4rem' }}>Tayalur Heritage & Values</h3>
                    <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        For generations, the people of Tayalur have upheld the values of compassion, unity, integrity, and service to humanity. The Tayalur Club continues this legacy by blending ancestral wisdom with modern solutions to address contemporary challenges, while preserving cultural identity and strengthening community bonds.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
