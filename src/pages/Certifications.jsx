import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.css';
import '../styles/certifications.css';

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

    const certificates = [
        {
            "CertiImage": "/Assets/html.png",
            "CertiCompany": "Certiport | Pearson",
            "CertiName": "HTML & CSS Certification",
            "CertiLink": "/Assets/HTML_CSS.pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/oracle_java.png",
            "CertiCompany": "ORACLE",
            "CertiName": "JAVA Certification",
            "CertiLink": "/Assets/ORACLE_JAVA.pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/redhat.png",
            "CertiCompany": "Red Hat",
            "CertiName": "RHCSA Certification",
            "CertiLink": "/Assets/Redhat.pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/iot.png",
            "CertiCompany": "NPTEL",
            "CertiName": "Internet Of Things",
            "CertiLink": "/Assets/IOT.pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/cloud.png",
            "CertiCompany": "NPTEL",
            "CertiName": "Cloud Computing",
            "CertiLink": "/Assets/Cloud.pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/Mongodb.png",
            "CertiCompany": "MongoDB",
            "CertiName": "MongoDB Certification",
            "CertiLink": "/Assets/Mongodb.pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/sql.png",
            "CertiCompany": "Oracle",
            "CertiName": "SQL Certification",
            "CertiLink": "/Assets/SQL_ORACLE (1).pdf",
            "category": "global"
        },
        {
            "CertiImage": "/Assets/cisco_c.png",
            "CertiCompany": "CISCO",
            "CertiName": "C Essentials",
            "CertiLink": "/Assets/Cisco_C.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/cisco_cpp.png",
            "CertiCompany": "CISCO",
            "CertiName": "CPP Essentials",
            "CertiLink": "/Assets/Cisco_Cpp.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/cisco_python.png",
            "CertiCompany": "CISCO",
            "CertiName": "Python Essentials",
            "CertiLink": "/Assets/Cisco_Python.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/oracle_jc1.png",
            "CertiCompany": "ORACLE",
            "CertiName": "JAVA Foundations",
            "CertiLink": "/Assets/Oracle_Course_Java1.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/oracle_jc2.png",
            "CertiCompany": "ORACLE",
            "CertiName": "JAVA Programming",
            "CertiLink": "/Assets/Oracle_Course_Java2.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/redhat_python.png",
            "CertiCompany": "REDHAT",
            "CertiName": "Python Programming",
            "CertiLink": "/Assets/Redhat_python.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/RH124.png",
            "CertiCompany": "REDHAT",
            "CertiName": "RHSA 1",
            "CertiLink": "/Assets/RH124.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/RH134.png",
            "CertiCompany": "REDHAT",
            "CertiName": "DO180",
            "CertiLink": "/Assets/RH134.pdf",
            "category": "certificates"
        },
        {
            "CertiImage": "/Assets/fsd_internship.png",
            "CertiCompany": "Technical Hub",
            "CertiName": "FSD with React Native",
            "CertiLink": "/Assets/FSD_Internship.pdf",
            "category": "internships"
        }
    ];

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
