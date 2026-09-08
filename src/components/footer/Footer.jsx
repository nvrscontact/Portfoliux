
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/nvrscontact/">
                        View Profile
                    </a>
                        <img src="/img/linkedin.svg" alt="" />
                </li>

                <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nvrscontact@gmail.com"
                        target="_blank" rel="noopener noreferrer">
                        Send a messaage
                    </a>
                        <img src="/img/email.svg" alt="" />
                </li>

                <li>
                    <a href="https://github.com/nvrscontact">
                        View Projects
                    </a>
                        <img src="/img/github.svg" alt="" />
                </li>
            </ul>
            <section>
                <p>If you want to grow your online audience and increase your visibility,  <br /> contact me and let's develop your idea for attract more customers.</p>
                <span>© Copyright 2026 Portfoliux</span>
            </section>
        </footer>
    )
}