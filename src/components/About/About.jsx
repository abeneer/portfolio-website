import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}> About Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="aboutImage" className={styles.aboutImage} />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/listImage.png")} alt="listImage" className={styles.listImage}/>
                        <div className={styles.aboutItemText}>
                            <h2> Hello! I'm Abeneer Saipogu</h2>
                            <h3>Full-Stack Developer</h3>
                            <p> A passionate Full Stack Developer with a knack for transforming ideas into digital solutions. With a blend of creativity and technical prowess,
                                I specialize in crafting seamless and dynamic web experiences.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/listImage.png")} alt="listImage"  className={styles.listImage} />
                        <div className={styles.aboutItemText}>
                            <p>My journey in tech began during my bachelor's degree in Information Technology, driven by a curiosity about how technologies come to life. Since then,
                                I have explored various domains of programming, including front-end, back-end, and data engineering.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/listImage.png")} alt="listImage"  className={styles.listImage}/>
                        <div className={styles.aboutItemText}>
                            <p>I thrive on challenges and enjoy every step of the development process, from conceptualizing ideas to deploying polished products.
                                My portfolio is a testament to my dedication to quality and innovation, featuring projects that solve real-world problems with efficient and scalable code. </p>
                        </div>
                    </li>

                </ul>
            </div>

        </section>

    )
}