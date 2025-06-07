import React from "react";
import styles from "./Contact.module.css";

export const Contact = ()=> {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={"assets/contact/emailIcon.png"} alt="Email Icon" />
                    <a href="mailto:tonnuquynhtram2004@gmail.com">tonnuquynhtram2004@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={"assets/contact/LinkedinIcon.png"} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/tram-ton-8a3727249/">linkedin.com/TramTon</a>
                </li>
                <li className={styles.link}>
                    <img src={"assets/contact/githubIcon.png"} alt="Github icon" />
                    <a href="https://www.github.com/TramTonne">github.com/TramTonne</a>
                </li>
            </ul>
        </footer>
    );
};