
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/nvrscontact/">
                        View Profile
                        <img src="/img/linkedin.svg" alt="" />
                    </a>
                </li>

                <li>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nvrscontact@gmail.com"
                        target="_blank" rel="noopener noreferrer">
                        Send a messaage
                        <img src="/img/email.svg" alt="" />
                    </a>
                </li>

                <li>
                    <a href="https://github.com/nvrscontact">
                        View Projects
                        <img src="/img/github.svg" alt="" />
                    </a>
                </li>
            </ul>
            <section>
                <p>Create customer satisfaction that leads to sales,
                    if you want to grow your online audience <br /> and increase your visibility, contact me and let's develop your idea for attract more customers.</p>
                <span>© Copyright 2026 Portfoliux</span>
            </section>
        </footer>
    )
}