import styles from './Hero.module.css'
import ButtonsTop from '../subcomponents/ButtonsTop'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <video src="/img/universe.mp4" autoPlay loop muted></video>
            <section className={styles.heroSection}>


                <h1>Websites with a <br /> visually
                    <span > harmonious</span>
                    <br /> <span>design</span> that your <br /> customers <i><span>love</span> </i></h1>
                <ButtonsTop title1={"UX Principles"} title2={"Full-Stack Apps"} title3={"AI Integration"} />
            </section>
        </div>
    )
}