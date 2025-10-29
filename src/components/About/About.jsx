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
                            <h3>Developer with Impact</h3>
                            <p className={styles.descript}>I’m driven by a genuine love for solving real-world problems with code. 
                                From building AI systems that streamline mortgage document processing to designing apps that support disaster preparedness, I focus on creating technology that makes life a little easier
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="assets/about/serverIcon.png" alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>AI & Full-Stack Experience</h3>
                            <p className={styles.descript}>My work blends AI innovation and full-stack development — combining tools like Next.js, Node.js, OpenAI, and LlamaIndex to build intelligent, user-centered solutions. I’ve developed everything from retrieval-augmented generation systems to full web and mobile applications.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="assets/about/uiIcon.png" alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Collaborative & Curious</h3>
                            <p className={styles.descript}>Whether I’m collaborating in research to advance neuro-symbolic AI or leading a hackathon team, I thrive in environments where curiosity drives learning. I enjoy turning challenges into opportunities to grow, build with others, and make something meaningful together.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
