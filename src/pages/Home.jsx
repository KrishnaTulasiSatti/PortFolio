import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import '../styles/home.css';
import '../styles/projects.css';
import '../styles/certifications.css';
import { projects, certificates } from '../data/portfolioData';

// Importing JSON animation data directly for performance and stability
import skillAnim1 from '../../public/Assets/RPeXbewMU8.json';
import skillAnim2 from '../../public/Assets/frontend.json';
import skillAnim3 from '../../public/Assets/Laptop.json';

// Mapping path strings to actual data objects
const animationMap = {
    "/Assets/RPeXbewMU8.json": skillAnim1,
    "/Assets/frontend.json": skillAnim2,
    "/Assets/Laptop.json": skillAnim3
};

// Handling potential CJS default import issue globally
const LottieComponent = Lottie.default || Lottie;

const LottiePlayer = ({ animationPath }) => {
    const animationData = animationMap[animationPath];

    if (!animationData) return <div className="gif"></div>;

    return (
        <div className="gif" data-aos="fade-right" data-aos-duration="2500" data-aos-delay="300">
            <LottieComponent
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

const Home = () => {
    const [typewriterText, setTypewriterText] = useState("");
    const words = ["Full Stack Developer", "Competitive Coder", "Website Designer"];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const cardsRef = useRef(null);
    const timelineRef = useRef(null);

    // Typing effect
    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                setTypewriterText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                if (charIndex <= 0) {
                    setIsDeleting(false);
                    setWordIndex(prev => (prev + 1) % words.length);
                }
            } else {
                setTypewriterText(currentWord.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                if (charIndex >= currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 70 : 140);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    useEffect(() => {
        AOS.init({
            duration: 1400,
            delay: 0,
            once: true,
            offset: 0
        });
    }, []);

    const skillObjects = [
        {
            "SkillHeading": "Competitive Programming",
            "platforms": [
                {
                    "name": "LeetCode",
                    "slug": "leetcode",
                    "user": "@krishnatulasi0302",
                    "link": "https://leetcode.com/u/krishnatulasi0302/",
                    "logo": "https://leetcode.com/favicon-32x32.png",
                    "problems": "600+",
                    "rating": "1780",
                    "rank": "Top 10.5%"
                },
                {
                    "name": "GeeksForGeeks",
                    "slug": "gfg",
                    "user": "@krishnatulasi",
                    "link": "https://auth.geeksforgeeks.org/user/krishnatulasi/",
                    "logo": "https://www.geeksforgeeks.org/favicon.ico",
                    "problems": "400+",
                    "rank": "#156"
                },
                {
                    "name": "CodeChef",
                    "slug": "codechef",
                    "user": "@krishnatulasi2",
                    "link": "https://www.codechef.com/users/krishnatulasi2",
                    "logo": "https://www.codechef.com/favicon.ico",
                    "problems": "200+",
                    "rating": "1500",
                    "rank": "2★"
                },
                {
                    "name": "HackerRank",
                    "slug": "hackerrank",
                    "user": "@krishnatulasi031",
                    "link": "https://www.hackerrank.com/profile/krishnatulasi031",
                    "badges": "9",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
                    "rank": "19★"
                },
                {
                    "name": "Codeforces",
                    "slug": "codeforces",
                    "user": "@krishnatulasi03",
                    "link": "https://codeforces.com/profile/krishnatulasi03",
                    "logo": "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3521352-2944796.png",
                    "rating": "1083",
                    "problems": "100+",
                    "rank": "Newbie"
                },
                {
                    "name": "CodingNinjas",
                    "slug": "codingninjas",
                    "user": "@krishnatulasi",
                    "link": "https://www.naukri.com/code360/profile/krishnatulasi",
                    "logo": "https://yt3.googleusercontent.com/vzoKU-xc-hMxDfk8FJ8hlX7T1tjVpNsyCZPILKuZl6zQ38jmNDgYPFMylLLA1pndMgQp-0N6Dg=s900-c-k-c0x00ffffff-no-rj",
                    "rating": "1739",
                    "rank": "Specialist"
                }
            ],
            "animationPath": "/Assets/RPeXbewMU8.json"
        },

    ];

    const achievements = [
        {
            "icon": "/Assets/thub.png",
            "link": "#",
            "heading": "Winner of Quiz in Winter War Event",
            "matter": "Won the quiz competition by demonstrating strong general knowledge and quick thinking.",
            "date": "December 2023, Technical Hub"
        },
        {
            "icon": "/Assets/thub.png",
            "link": "#",
            "heading": "Winner of Code Complete in Winter War Event",
            "matter": "Won the coding competition held in Winter War event",
            "date": "December 2023, Technical Hub"
        },
        {
            "icon": "/Assets/thub.png",
            "link": "#",
            "heading": "Winner of Bi-weekly Coding Contest 6",
            "matter": "Excelled in solving coding problems through efficient problem-solving.",
            "date": "January 2024, Technical Hub"
        },
        {
            "icon": "/Assets/trainee_of_month.png",
            "link": "#",
            "heading": "Trainee Of the Month (Bamboo Coders)",
            "matter": "Awarded 'Trainee of the Month' for exceptional performance and commitment",
            "date": "October 2024, Technical Hub"
        },
        {
            "icon": "/Assets/thub.png",
            "link": "#",
            "heading": "Winner of Bash Battle",
            "matter": "Achieved top position in Bash Battle through efficient and accurate command-line problem-solving.",
            "date": "January 2025, Technical Hub"
        },
        {
            "icon": "/Assets/thub.png",
            "link": "#",
            "heading": "Winner of SQL Detectives Challenge",
            "matter": "Achieved top position for demonstrating strong database querying.",
            "date": "January 2025, Technical Hub"
        }
    ];

    const experiences = [
        { title: "1st Sem", subtitle: "Ignite Coder", items: ["C", "Problem Solving"] },
        { title: "2nd Sem", subtitle: "Ignite Coder", items: ["Data Structures & Algorithms", "Won Bi-Weekly Contest-6", "C++"] },
        { title: "3rd Sem", subtitle: "Bamboo Coder", items: ["Java", "Python", "ADSA", "HTML", "CSS", "JavaScript"] },
        { title: "4th Sem", subtitle: "Become Coder", items: ["OS", "DBMS", "Owl Coder 4.0", "Competitive Programming"] },
        { title: "5th & 6th Sem", subtitle: "Drive Ready 7.0", items: ["React", "Node", "Express", "MongoDB", "React Native", "Owl Coder 5.0"] }
    ];

    // Achievement slider logic
    const nextscrollFun = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollLeft += cardsRef.current.offsetWidth;
        }
    };

    const prevscrollFun = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollLeft -= cardsRef.current.offsetWidth;
        }
    };

    const nextTimeline = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollLeft += 450;
        }
    };

    const prevTimeline = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollLeft -= 450;
        }
    };

    const [chunkSize, setChunkSize] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setChunkSize(1);
            } else if (window.innerWidth <= 1050) { // Coverage for the 1024px screen
                setChunkSize(2);
            } else {
                setChunkSize(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Helper to divide achievements into responsive groups
    const chunkedAchievements = [];
    for (let i = 0; i < achievements.length; i += chunkSize) {
        chunkedAchievements.push(achievements.slice(i, i + chunkSize));
    }

    return (
        <div style={{ backgroundColor: '#292930', position: 'relative' }}>
            <main>
                <div className="image" data-aos="fade-right" data-aos-duration="2500" style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                    <img src="https://mobile.technicalhub.io:5010/student/23A91A05C5.png" alt="MyImage" />
                    <div className="name" style={{ fontSize: '24px', letterSpacing: '2px', textTransform: 'uppercase', fontStyle: 'normal', margin: 0, height: 'auto' }}>
                        Krishna Tulasi<span>Satti</span>
                    </div>
                </div>

                <div className="about">
                    <p data-aos="fade-down">Hello !</p>
                    <p data-aos="fade-up" data-aos-delay="300">This is <span className="my_name">Krishna Tulasi Satti</span></p>
                    <p data-aos="fade-up" data-aos-delay="600">I am a <span className="info">{typewriterText}</span></p>

                    <div className="about_para">
                        <p>I build high-performance applications specializing in the <b>MERN stack</b> and <b>React Native</b>. As a <b>Competitive Coder</b> proficient in <b>C++, Java, and Python</b>, I combine algorithmic efficiency with tools like <b>Git</b> to deliver scalable, high-quality software with a focus on clean, impactful design.</p>
                    </div>





                    <div className="resume_only" style={{ marginTop: '40px' }}>
                        <a href="https://drive.google.com/file/d/1ULL08m1OttJiSJmwV9DPx3X3xgV8its_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="view-all-btn" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '18px' }}>
                            View Resume
                        </a>
                    </div>
                </div>
            </main>

            <div className="myskills" id="about_me" style={{ backgroundColor: '#1d1d25', padding: '100px 0' }}>
                {skillObjects.map((ele, index) => (
                    <div
                        key={index}
                        className={`skill ${ele.platforms ? 'cp-skill' : ''}`}
                        style={index % 2 === 1 ? { flexWrap: 'wrap-reverse' } : {}}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <div className="skill-info">
                                    {ele.SkillName && <p style={{ color: '#e7721e' }}>{ele.SkillName}</p>}
                                    <h2 style={{ textAlign: 'center' }}>{ele.SkillHeading}</h2>
                                    <div className="images">
                                        {ele.image1 && (
                                            <>
                                                <a href="" data-aos="fade-left" data-aos-delay="200"><img src={ele.image1} alt="Icon" width="28" /></a>
                                                <a href="" data-aos="fade-left" data-aos-delay="400"><img src={ele.image2} alt="Icon" width="29" /></a>
                                                <a href="" data-aos="fade-left" data-aos-delay="600"><img src={ele.image3} alt="Icon" width="30" /></a>
                                                <a href="" data-aos="fade-left" data-aos-delay="800"><img src={ele.image4} alt="Icon" width="28" /></a>
                                            </>
                                        )}
                                    </div>

                                    {ele.platforms ? (
                                        <div className="stats-grid">
                                            {ele.platforms.map((plat, i) => (
                                                <div
                                                    key={i}
                                                    className={`stat-card plat-${plat.slug}`}
                                                    data-aos="fade-up"
                                                    data-aos-delay={100 * (i + 1)}
                                                    onClick={() => window.open(plat.link, "_blank")}
                                                >
                                                    <div className="stat-header">
                                                        <img src={plat.logo} alt={plat.name} />
                                                        <div className="stat-info">
                                                            <div className="stat-name">{plat.name}</div>
                                                            <div className="stat-user">{plat.user}</div>
                                                        </div>
                                                    </div>
                                                    <div className="stat-body">
                                                        {(plat.problems || plat.badges) && (
                                                            <div className="stat-item">
                                                                <div className="stat-val">{plat.badges || plat.problems}</div>
                                                                <div className="stat-label">{plat.badges ? "Badges" : "Problems"}</div>
                                                            </div>
                                                        )}
                                                        {plat.rating && (
                                                            <div className="stat-item">
                                                                <div className="stat-val">{plat.rating}</div>
                                                                <div className="stat-label">Rating</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="stat-rank">
                                                        <span className="rank-val">{plat.rank}</span>
                                                        <span className="rank-label">
                                                            {plat.name === "CodeChef" || plat.name === "HackerRank" ? "Stars" :
                                                                plat.name === "Coding Ninjas" ? "Level" : "Rank"}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="bullets">
                                            <ul>
                                                {ele.points.map((pt, i) => (
                                                    <li key={i} data-aos="fade-up" data-aos-delay={300 * (i + 1)}>{pt}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                {!ele.platforms && <LottiePlayer animationPath={ele.animationPath} />}
                            </>
                        ) : (
                            <>
                                <LottiePlayer animationPath={ele.animationPath} />
                                <div className="skill-info">
                                    {ele.SkillName && <p style={{ color: '#e7721e' }}>{ele.SkillName}</p>}
                                    <h2 style={{ textAlign: 'center' }}>{ele.SkillHeading}</h2>
                                    <div className="images">
                                        <a href="" data-aos="fade-left" data-aos-delay="200"><img src={ele.image1} alt="Icon" width="28" /></a>
                                        <a href="" data-aos="fade-left" data-aos-delay="400"><img src={ele.image2} alt="Icon" width="29" /></a>
                                        <a href="" data-aos="fade-left" data-aos-delay="600"><img src={ele.image3} alt="Icon" width="30" /></a>
                                        <a href="" data-aos="fade-left" data-aos-delay="800"><img src={ele.image4} alt="Icon" width="28" /></a>
                                    </div>

                                    <div className="bullets">
                                        <ul>
                                            {ele.points.map((pt, i) => (
                                                <li key={i} data-aos="fade-up" data-aos-delay={300 * (i + 1)}>{pt}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>



            {/* Projects Overview */}
            <div className="home-section" style={{ backgroundColor: '#292930', padding: '100px 20px' }}>
                <div className="new-projects-container">
                    <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                        <h1 style={{ margin: 0, fontSize: '36px', textAlign: 'left' }}>Featured Projects</h1>
                        <Link to="/projects" className="view-all-btn">View All Projects</Link>
                    </div>
                    <div className="new-projects-grid">
                        {projects.slice(0, 2).map((ele, index) => (
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

            {/* Certifications Overview */}
            <div className="home-section" style={{ backgroundColor: '#1d1d25', padding: '100px 20px' }}>
                <div className="cert-container">
                    <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                        <h1 style={{ margin: 0, fontSize: '36px', textAlign: 'left' }}>Latest Certifications</h1>
                        <Link to="/certifications" className="view-all-btn">View All Certificates</Link>
                    </div>
                    <div className="cert-grid">
                        {certificates.slice(-3).reverse().map((cert, index) => (
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

            <div className="achievements" style={{ backgroundColor: '#292930', padding: '100px 20px', marginBottom: 0 }}>
                <h1 style={{ textAlign: 'center', margin: '0 0 50px 0', fontSize: '36px' }}>Achievements</h1>

                <div className="cards-wrap">
                    <div className="prev-button" onClick={prevscrollFun}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="cards" ref={cardsRef} style={{ scrollBehavior: 'smooth' }}>
                        {chunkedAchievements.map((group, groupIdx) => (
                            <div key={groupIdx} className="achieve_cards">
                                {group.map((ele, index) => (
                                    <div key={index} className="achieve_card" style={{ height: '380px' }}>
                                        <div className="achieve_icon-div">
                                            <div className="achieve_icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <a href={ele.link}>
                                                    <img src={ele.icon} alt="" style={{ borderRadius: '50%', height: '100px', width: '100px' }} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="achieve_matter">
                                            <p className="achieve_title">{ele.heading}</p>
                                            <p className="achieve_description">{ele.matter}</p>
                                            <p className="achieve_date">{ele.date}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="next-button" onClick={nextscrollFun}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div id="experience" style={{ background: '#1d1d25', padding: '100px 0' }}>
                <div className="experience-section">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
                        <h1 data-aos="fade-down" style={{ textAlign: 'center', margin: 0, color: '#fff', fontSize: '36px' }}>Experience & Education</h1>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div className="prev-button" onClick={prevTimeline} style={{ position: 'relative', top: '0', transform: 'none', left: '0', right: '0' }}>
                                <i className="fas fa-arrow-left"></i>
                            </div>
                            <div className="next-button" onClick={nextTimeline} style={{ position: 'relative', top: '0', transform: 'none', left: '0', right: '0' }}>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="h-timeline" data-aos="fade-up" ref={timelineRef} style={{ scrollBehavior: 'smooth' }}>
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

            {/* Contact Call to Action */}
            <div className="home-section" style={{ backgroundColor: '#292930', padding: '100px 20px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '46px', color: '#fff', marginBottom: '20px' }} data-aos="fade-up">Ready to start a project?</h1>
                <p style={{ color: '#999', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: "1.6" }} data-aos="fade-up" data-aos-delay="200">
                    I'm currently available for freelance work and full-time opportunities.
                    Let's build something amazing together!
                </p>
                <Link to="/contact" className="view-all-btn" style={{ padding: '15px 40px', fontSize: '18px' }} data-aos="fade-up" data-aos-delay="400">
                    Get In Touch
                </Link>
            </div>
        </div>
    );
};

export default Home;

