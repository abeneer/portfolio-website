// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";

// export const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     return (
//         <nav className={styles.navbar}>
//             <a className={styles.title} href="/">portfolio</a>

//             <div className={styles.menu}>
//                 <img className={styles.menuBtn} src={
//                     menuOpen
//                         ? getImageUrl("nav/closeIcon.png")
//                         : getImageUrl("nav/menuIcon.png")}
//                     alt="menu-btn"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     />
//                    <ul
//           className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
//           onClick={() => setMenuOpen(false)}
//         >
//                     <li>
//                         <a href="#about">About</a>
//                     </li>

//                     <li>
//                         <a href="#experience">Experience</a>
//                     </li>

//                     <li>
//                         <a href="#projects">Projects</a>
//                     </li>

//                     <li>
//                         <a href="#contact">Contact</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };



import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResumeClick = () => {
        const resumeUrl = "https://drive.google.com/file/d/1H_Gphso2Ie7cTv8LbLO_-nL7rZHI6sL1/view?usp=drive_link"; 
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
