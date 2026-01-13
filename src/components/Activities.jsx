import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaFutbol, FaHandshake, FaGraduationCap, FaHeart, FaUsers } from 'react-icons/fa';

const ActivityCard = ({ icon, title, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            transition: '0.3s'
        }}
        whileHover={{ y: -10, borderColor: 'var(--primary)' }}
    >
        <div style={{
            fontSize: '3rem',
            color: 'var(--primary-glow)',
            marginBottom: '1rem',
            background: 'rgba(0, 71, 171, 0.1)',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h3>
    </motion.div>
);

const Activities = () => {
    const activities = [
        { title: 'Food and Culture', icon: <FaUtensils /> },
        { title: 'Football and Sports', icon: <FaFutbol /> },
        { title: 'Networking', icon: <FaHandshake /> },
        { title: 'Education', icon: <FaGraduationCap /> },
        { title: 'Charitable Initiatives', icon: <FaHeart /> },
        { title: 'Socializing', icon: <FaUsers /> },
    ];

    return (
        <section id="activities" className="section-padding" style={{ position: 'relative' }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '100%', height: '100%',
                background: 'radial-gradient(ellipse at center, #0a0a20 0%, #050510 100%)',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Core <span className="text-gradient">Activities</span></h2>
                    <p>Where ambition meets community.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }} className="grid-mobile-1">
                    {activities.map((act, index) => (
                        <ActivityCard key={index} icon={act.icon} title={act.title} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;
