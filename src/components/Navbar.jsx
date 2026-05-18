import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleNavLinkClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeSidebar();
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="nav-bar">
            <Link to="/" className="logo-link" onClick={() => handleNavLinkClick('/')}>
                <div className="name">
                    Krishna Tulasi <span>Satti</span>
                </div>
            </Link>

            <div className="nav-links">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={isActive(link.path) ? 'active' : ''}
                        onClick={() => handleNavLinkClick(link.path)}
                    >
                        {link.name}
                    </Link>
                ))}
                <a
                    href="https://drive.google.com/file/d/1ULL08m1OttJiSJmwV9DPx3X3xgV8its_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                >
                    Resume
                </a>
            </div>

            <div className="menu-icon" onClick={openSidebar}>
                <i className="fas fa-bars fa-2x"></i>
            </div>

            <div className={`menu-bar ${isSidebarOpen ? 'active' : ''}`}>
                <span className="close-icon" onClick={closeSidebar}>&#10005;</span>

                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={isActive(link.path) ? 'active' : ''}
                        onClick={() => handleNavLinkClick(link.path)}
                    >
                        {link.name}
                    </Link>
                ))}
                
                <a
                    href="https://drive.google.com/file/d/1ULL08m1OttJiSJmwV9DPx3X3xgV8its_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn-mobile"
                    onClick={closeSidebar}
                >
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Navbar;
