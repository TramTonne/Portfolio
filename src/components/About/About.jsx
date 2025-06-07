import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    // src={getImageUrl("about/aboutImage.png")}
                    src="assets/about/aboutImage.png" 
                    alt="Me sitting with an laptop" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    {/* This list content need to be changed afterwards */}
                    <li className={styles.aboutItem}>
                        <img src="assets/about/cursorIcon.png" alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Developer with Purpose</h3>
                            <p>Driven by a passion for solving real-world problems,
                                I build tools and applications that make a tangible impact—from automating job applications to improving disaster preparedness for caregivers.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="assets/about/serverIcon.png" alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>AI & Full-Stack Experience</h3>
                            <p>I combine backend development with AI-powered solutions, 
                                working with technologies like Next.js, Node.js, OpenAI, and LlamaIndex to create intelligent, user-focused systems.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="assets/about/uiIcon.png" alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Collaborative & Curious</h3>
                            <p>Whether collaborating in a hackathon or leading a student organization, 
                                I thrive in team environments and continuously seek opportunities to 
                                grow, learn, and contribute meaningfully.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
