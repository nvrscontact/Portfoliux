import styles from './Expertise.module.css'

export default function Technology({ title, img, heightImg, category }) {
    return (
        <div className={styles.technology}>
            <img src={img} alt="" />
            <section>
                <h4>{title}</h4>
                <span className={styles.category}>{category}</span>
            </section>
        </div>
    )
}
