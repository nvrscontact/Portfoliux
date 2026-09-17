
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section>

                <a href="https://github.com/nvrscontact"><img src="/img/github.svg" alt="" />
                </a>


                <a href="https://www.linkedin.com/in/nvrscontact/">
                    <img src="/img/linkedin.svg" alt="" />
                </a>


                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nvrscontact@gmail.com"
                    target="_blank" rel="noopener noreferrer">
                    <img src="/img/email.svg" alt="" />
                </a>

            </section>

            <section>
                <p>Contact me, let's building your idea for captivaze that <br /> customers and unlock another advantage for your business.</p>
                <span>© Copyright 2026 Portfoliux</span>
            </section>

        </footer>
    )
}