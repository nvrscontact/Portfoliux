import styles from './Expertise.module.css'

export default function Technology({ title, img, heightImg, category }) {
    return (
        <div className={styles.technology}>
            <img src={img} alt="" style={{ width: heightImg || "60px" }} />
            <section>
                <h4>{title}</h4>
                <span className={styles.category}>{category}</span>
            </section>
        </div>
    )
}
