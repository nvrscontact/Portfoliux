import styles from '../technologies/Technologies.module.css'

export default function Technology({ title, img, heightImg, category }) {
    return (
        <div className={styles.technology}>
            <img src={img} alt="" style={{ width: heightImg || "60px" }} />
            <section>
                <h4>{title}</h4>
                <span>{category}</span>
            </section>
        </div>
    )
}
