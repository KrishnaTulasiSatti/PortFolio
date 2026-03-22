import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.css'; // Has vertical timeline CSS

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 0,
            once: true,
            offset: 0
        });
    }, []);

    const experiences = [
       
        {
            title: "1st Sem",
            subtitle: "Ignite Coder",
            items: ["C", "Problem Solving"]
        },
        {
            title: "2nd Sem",
            subtitle: "Ignite Coder",
            items: ["Data Structures & Algorithms","Won Bi-Weekly Contest-6","C++"]
        },
        {
            title: "3rd Sem",
            subtitle: "Bamboo Coder",
            items: ["Java", "Python", "ADSA", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "4th Sem",
            subtitle: "Become Coder",
            items: ["OS", "DBMS", "Owl Coder 4.0", "Competitive Programming"]
        },
        {
            title: "5th & 6th Sem",
            subtitle: "Drive Ready 7.0",
            items: ["React", "Node", "Express", "MongoDB", "React Native" ,"Owl Coder 5.0"]

        }
    ];

    return (
        <div style={{ backgroundColor: '#1d1d25', minHeight: 'calc(100vh - 200px)', paddingBottom: '20px', paddingTop: '20px' }}>
            <div className="experience-section">
                <h1 data-aos="fade-down">Experience & Education</h1>
                <p className="experience-subtitle" data-aos="fade-up">A timeline of my academic journey, coding clubs, and the skills I've picked up along the way.</p>
                <div className="h-timeline" data-aos="fade-up">
                    <div className="h-timeline-items">
                        {experiences.map((exp, index) => (
                            <div key={index} className="h-timeline-item">
                                <div className="h-timeline-dot"></div>
                                <div className="h-timeline-card">
                                    <div className="timeline-header">
                                        <h3>{exp.title}</h3>
                                        {exp.subtitle && <h4>{exp.subtitle}</h4>}
                                    </div>
                                    {exp.items.length > 0 && (
                                        <div className="timeline-tags">
                                            {exp.items.map((item, i) => (
                                                <span key={i} className="timeline-tag">{item}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
