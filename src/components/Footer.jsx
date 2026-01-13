import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#020205',
            padding: '4rem 0 2rem',
            borderTop: '1px solid #111'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '2px' }}>THE TAYALUR CLUB</h3>
                <p style={{ color: '#666', marginBottom: '2rem' }}>Together. Stronger. Forever.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    {/* Social Placeholders if needed */}
                </div>

                <p style={{ color: '#444', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} The Tayalur Club. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
