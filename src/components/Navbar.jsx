import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/home.css';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Certifications', path: '/certifications' },
    ];

    const isActive = (path) => {
        if (path.startsWith('/#')) {
            return location.pathname === '/' && location.hash === path.substring(1);
        }
        return location.pathname === path;
    };

    return (
        <div className="nav-bar">
            <div className="name">
                Krishna Tulasi <span>Satti</span>
            </div>



            <div className="nav-links">
                {navLinks.map((link) => (
                    link.path.startsWith('http') ? (
                        <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    ) : link.path.startsWith('/#') ? (
                        <a key={link.name} href={link.path} style={isActive(link.path) ? { color: '#e7721e' } : {}}>{link.name}</a>
                    ) : (
                        <Link key={link.name} to={link.path} style={isActive(link.path) ? { color: '#e7721e' } : {}}>
                            {link.name}
                        </Link>
                    )
                ))}
                <a href="https://drive.google.com/file/d/1ULL08m1OttJiSJmwV9DPx3X3xgV8its_/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                <Link to="/contact">
                    <button className="contact-button">Contact</button>
                </Link>
            </div>

            <div className="menu-icon" onClick={openSidebar}>
                <i className="fas fa-bars fa-2x"></i>
            </div>

            <div className={`menu-bar ${isSidebarOpen ? 'active' : ''}`}>
                <span className="close-icon" onClick={closeSidebar}>&#10005;</span> 
                
                {navLinks.map((link) => (
                    link.path.startsWith('http') ? (
                        <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" onClick={closeSidebar}>{link.name}</a>
                    ) : (
                        <Link key={link.name} to={link.path} style={isActive(link.path) ? { color: '#e7721e' } : {}} onClick={closeSidebar}>
                            {link.name}
                        </Link>
                    )
                ))}
                <Link to="/contact" onClick={closeSidebar}>
                    <button className="contact-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
