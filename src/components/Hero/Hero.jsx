import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Tram</h1>
            <p className={styles.description}> I'm a Computer Science student at the University of South Florida with a passion for building impactful, user-focused applications. 
                From AI-powered tools to full-stack web development, I enjoy solving real-world problems through clean code, smart automation, and thoughtful design.</p>
            <div className={styles.btns}>
            <a href ="mailto:tonnuquynhtram2004@gmail.com" className={styles.contactBtn}>Contact Me ✉️</a>
            <a href="/assets/resume/TramTon_Resume copy.pdf" download="Tram_Resume.pdf" className={styles.contactBtn}>Resume 📥</a>
            </div>
        </div>
        <img src={"assets/hero/heroImage.png"} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
    );
};