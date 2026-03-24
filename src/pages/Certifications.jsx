import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.css';
import '../styles/certifications.css';

import { certificates } from '../data/portfolioData';

const Certifications = () => {
    const [activeCategory, setActiveCategory] = useState('global');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 0,
            once: true,
            offset: 0
        });
    }, []);


    const categories = [
        { id: 'global', name: 'Global Certifications' },
        { id: 'certificates', name: 'Certifications' },
        { id: 'internships', name: 'Internships' }
    ];

    const filteredCertificates = certificates.filter(cert => cert.category === activeCategory);

    return (
        <div style={{ backgroundColor: '#1d1d25', minHeight: '100vh', padding: '80px 20px' }}>
            <div className="cert-container">
                <div className="cert-header" data-aos="fade-down">
                    <h1>Certifications</h1>
                    <p>Industry-recognized credentials that validate my expertise across various technologies and platforms.</p>
                </div>

                <div className="cert-tabs" data-aos="fade-up">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`cert-tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="cert-grid" key={activeCategory}>
                    {filteredCertificates.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.CertiLink}
                            target="_blank"
                            rel="noreferrer"
                            className="cert-card"
                            data-aos="fade-up"
                            data-aos-delay={80 * (index + 1)}
                        >
                            <div className="cert-image-wrap">
                                <img src={cert.CertiImage} alt={cert.CertiName} />
                                <div className="cert-overlay">
                                    <span>View Certificate</span>
                                </div>
                            </div>
                            <div className="cert-details">
                                <span className="cert-company">{cert.CertiCompany}</span>
                                <h3 className="cert-name">{cert.CertiName}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
