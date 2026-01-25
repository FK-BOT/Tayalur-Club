import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{
            padding: '4rem 0',
            background: '#050510',
            color: 'white',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{
                    background: 'rgba(0, 31, 77, 0.3)',
                    border: '1px solid rgba(0, 100, 255, 0.3)',
                    borderRadius: '20px',
                    padding: '3rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    boxShadow: '0 0 30px rgba(0, 100, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        color: 'white'
                    }}>
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <div style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <p>
                            Email: <a href="mailto:thetayalurclub@gmail.com" style={{ color: '#4da6ff', textDecoration: 'none', fontWeight: 'bold' }}>thetayalurclub@gmail.com</a>
                        </p>
                        {/* <p>Phone: +91 12345 67890</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
