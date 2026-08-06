import styles from './HeaderBtn.module.css'

export default function HeaderBtn({title}){
    return(
       <h1 className={styles.headerBtn}>{title}</h1>
    )
}