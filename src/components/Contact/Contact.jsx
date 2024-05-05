import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return ( 
        <>

            <section className={styles.container} id="contact">
                <div className={styles.content}>
                    <h2>Contact Me</h2>
                </div>

                {/* <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <input type="text" className={styles.input} placeholder="Your Name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" className={styles.input} placeholder="Your Email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea className={styles.textarea} name="message" rows="5" placeholder="Your Message" required />
                    </div>
                    <button type="button" className={styles.glowingBtn}>
                        <span className={styles.glowingTxt}>
                            C<span className={styles.faultyLetter}>L</span>ICK
                        </span>
                    </button>
                    
                </form> */}

                <div className={styles.links}> 
                    <a href="mailto:your.absaipogu@gmail.com">
                        <img src={getImageUrl('contact/emailImage.png')} alt="Email" className={styles.link} />
                    </a>
                    <a href="https://www.linkedin.com/in/abeneer-saipogu-83b133217/" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl('contact/linkedinImage.png')} alt="LinkedIn" className={styles.link} />
                    </a>
                    <a href="https://www.instagram.com/abner_saipogu?igsh=M242aHV5dHN6eHI1" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl('contact/instagram.png')} alt="Instagram" className={styles.link} />
                    </a>
                    <a href="https://www.facebook.com/abeneer.saipogu" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl('contact/facebook.png')} alt="Facebook" className={styles.link} />
                    </a>
                    <a href="https://github.com/abeneer" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl('contact/github.png')} alt="Github" className={styles.link} />
                    </a>
                    {/* Add more links as needed */}
                </div>

            </section>

        </>

    );
};


