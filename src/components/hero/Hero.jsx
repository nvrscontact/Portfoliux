import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, hic?</p>
            {/* 
            <video className={styles.bgVideo} src="/img/universe.mp4" autoPlay loop muted></video>
*/}
            <section className={styles.heroSection}>
                <h1 className={styles.whiteBasic}>Websites with a <br /> visually
                    <span > harmonious</span>
                    <br /> <span>design</span> that your <br /> customers <i><span>love</span> </i></h1>
            </section>



        </div>
    )
}