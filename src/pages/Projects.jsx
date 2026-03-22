import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.css';
import '../styles/projects.css';

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1400,
            delay: 0,
            once: true,
            offset: 0
        });
    }, []);

    const projects = [
        {
            "projectImage": "/Assets/healthhub.png",
            "website": "https://healthhub-ai.vercel.app/",
            "projectTitle": "Health Hub",
            "role": "Frontend & Backend Developer",
            "projectDesc": "A full-stack MERN healthcare platform integrating LLMs for an AI-powered symptom checker and condition-based diet planning. Includes secure JWT authentication, a premium diagnostic UI, and dynamic hospital listings.",
            "techStack": "MongoDB, Express, React, React Router, Node.js, AI/LLMs, Mongoose, JWT",
            "github_link": "https://github.com/KrishnaTulasiSatti/HealthHub"
        },
        {
            "projectImage": "/Assets/healthhub.png",
            "website": "https://healthhub-ai.vercel.app/",
            "projectTitle": "Health Hub",
            "role": "Frontend & Backend Developer",
            "projectDesc": "A full-stack MERN healthcare platform integrating LLMs for an AI-powered symptom checker and condition-based diet planning. Includes secure JWT authentication, a premium diagnostic UI, and dynamic hospital listings.",
            "techStack": "MongoDB, Express, React, React Router, Node.js, AI/LLMs, Mongoose, JWT",
            "github_link": "https://github.com/KrishnaTulasiSatti/HealthHub"
        }
    ];

    return (
        <div style={{ backgroundColor: '#1d1d25', minHeight: '100vh', padding: '80px 20px 20px 20px', fontFamily: '"Josefin Sans", sans-serif' }}>
            <div className="new-projects-container">
                <div className="new-projects-header" data-aos="fade-down">
                    <h1>Projects</h1>
                    <p>A selection of systems I've built and overseen — focused on scale, reliability, and real-world complexity.</p>
                </div>

                <div className="new-projects-grid">
                    {projects.map((ele, index) => (
                        <div key={index} className="new-project-card" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                            <div className="new-project-content">
                                <h2 className="new-project-title">{ele.projectTitle}</h2>
                                {ele.role && <p className="new-project-role">{ele.role}</p>}
                                
                                <p className="new-project-desc">{ele.projectDesc}</p>
                                
                                <div className="new-project-tech">
                                    {ele.techStack.split(',').map((tech, i) => (
                                        <span key={i} className="tech-pill">{tech.trim()}</span>
                                    ))}
                                </div>
                                <div className="new-project-links">
                                    {ele.website && <a href={ele.website} target="_blank" rel="noreferrer" className="plink">Live Demo</a>}
                                    {ele.github_link && <a href={ele.github_link} target="_blank" rel="noreferrer" className="plink">GitHub</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
