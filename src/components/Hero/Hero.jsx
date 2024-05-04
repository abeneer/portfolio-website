import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Abeneer Saipogu</h1>
                <p className={styles.description}>I'm a Full-Stack Developer</p>
                < a href="mailto:absaipogu@gmail.com" className={styles.contactBtn} >Contact Me</a>
            </div>
            <img src={getImageUrl ("hero/heroImage.jpeg")} alt="hero image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}