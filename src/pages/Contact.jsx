import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import welcomeAnim from '../../public/Assets/Welcome.json';
import '../styles/home.css';
import '../styles/contact.css';

const LottieComponent = Lottie.default || Lottie;

const Contact = () => {
    const [result, setResult] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 0,
            once: true,
            offset: 0
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending message...");
        const formData = new FormData(event.target);

        // Using the imported Vite environment variable from .env
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Message sent successfully!");
                event.target.reset();
                setTimeout(() => setResult(""), 5000); // Clear message after 5 seconds
            } else {
                console.error("Error", data);
                setResult("⚠️ " + data.message);
            }
        } catch (error) {
            setResult("⚠️ An error occurred. Please try again later.");
        }
    };

    return (
        <div style={{ backgroundColor: '#1d1d25', minHeight: '100vh', padding: '80px 20px' }}>
            <div className="contact-container">
                <div className="contact-header" data-aos="fade-down">
                    <h1>Contact Me</h1>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or a proposal, feel free to reach out.</p>
                </div>

                <div className="contact-main">
                    <div className="contact-anim-wrapper" data-aos="fade-right">
                        <div className="lottie-box">
                            {welcomeAnim && (
                                <LottieComponent 
                                    animationData={welcomeAnim} 
                                    loop={true} 
                                    style={{ width: '100%', height: '100%' }} 
                                />
                            )}
                        </div>
                        <p className="contact-anim-text">Let’s bring ideas to life — reach out and let’s create something impactful together.</p>
                        
                        <div className="contact-socials">
                            <a href="https://www.linkedin.com/in/krishna-tulasi-satti-649024283/" target="_blank" rel="noreferrer" className="social-pill">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/KrishnaTulasiSatti" target="_blank" rel="noreferrer" className="social-pill">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="mailto:23A91A05C5@aec.edu.in" className="social-pill">
                                <i className="fas fa-envelope"></i>
                            </a>
                            <a href="https://www.instagram.com/_krishna_tulasi" target="_blank" rel="noreferrer" className="social-pill">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="tel:+918790369062" className="social-pill">
                                <i className="fas fa-phone"></i>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="200">
                        <form className="form-glass-card" onSubmit={onSubmit}>
                            <h2>Let's Work Together <span>:)</span></h2>
                            
                            <div className="input-group">
                                <label>Your Name</label>
                                <input type="text" name="name" placeholder="Enter your full name" required />
                            </div>

                            <div className="input-group">
                                <label>Your Email</label>
                                <input type="email" name="email" placeholder="Enter your email address" required />
                            </div>

                            <div className="input-group">
                                <label>Your Message</label>
                                <textarea name="message" rows="6" placeholder="Type your message here..." required></textarea>
                            </div>

                            <button className="submit-btn" type="submit">
                                Send Message <i className="fas fa-paper-plane" style={{marginLeft: '8px'}}></i>
                            </button>

                            {result && (
                                <p style={{ 
                                    color: result.includes('✅') ? '#4caf50' : (result.includes('⚠️') ? '#f44336' : '#e7721e'), 
                                    marginTop: '20px', 
                                    textAlign: 'center',
                                    fontWeight: '600'
                                }}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
