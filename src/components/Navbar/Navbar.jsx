import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResumeClick = () => {
        const resumeUrl = "https://doc-00-4g-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/a2nhdejue0m1r5c9isbdd57gv1jh2s2e/kvvq8pmt2er99nlhgte991j0o440baft/1727957250000/3/101345331804218245445/APznzaaFA0Ok2mpLryHT75NolW7ip6x8xsINjSUgNipWqmLvl5IA2BphBZkddisvXC-lkQUj3wsjJrIaDf2DtD1LpRnzAOhAMr3FY6W2rSMIb1ioEvzXWU6ARqQDaN0C8nwkYpT0WuNQgTG0DAWBUonDVd1h4j3_4oEQLKjcpManV-CpNHZCOuJjOnWIYMPMjdNvwp-CZyJ3qsqVGHStRByYGYo-jQxbgjPRexgbjv6bu1FzWCs-emKg86sWhy9GOd1g7i9JQEFtANOKeJQlMzgzZQppwRbrMn6LGBVoc5pw5WKKQYN7U8LWLynQjil2-AYST0sr_UNduo8QOjZsVWseCo7uauKQ135JMTTdZIPuZm9q9CryCGxJk5v9L92A4no2AG0TEXsnHDVJ4qQtlm9iv9QmQmL-eGGcpOjuwXu1mDRWYfV6JHU=?authuser=1&nonce=63gag12kq95pg&user=101345331804218245445&hash=k4g7hifguaj2a3thg3flvjskqil5n2jt";
        window.open(resumeUrl, "_blank");
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">portfolio</a>

            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <button onClick={handleResumeClick} className={styles.resumeButton}>
                            Resume
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
