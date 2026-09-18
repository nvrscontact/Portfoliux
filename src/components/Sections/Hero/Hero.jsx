import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <p className={styles.paragraph}>Let's develop your idea.</p>

            <section className={styles.heroSection}>
                <h1 className={styles.whiteBasic}>
                    Websites that <br />
                    look beautiful <br />
                    and turns visitors <br />
                    into customers
                    </h1>
            </section>

            <section className={styles.aditionalInfo}>
                <span>AI Integration</span>
                <span>Full-Stack Apps</span>
                <span>UX Sleek</span>
            </section>



        </div>
    )
}