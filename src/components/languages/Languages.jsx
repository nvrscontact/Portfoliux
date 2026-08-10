
import HeaderBtn from "../subcomponents/headerBtn/HeaderBtn"
import styles from "./Languages.module.css"

export default function Languages() {
    return (
        <div className={styles.languages}>
            <HeaderBtn title={"Languages"} />
            <ul>
                <li>
                    <div>
                        <section>
                            <h3>Spanish</h3>
                            <span>Native Speaker</span>
                        </section>
                        <button>
                            <a href="/utils/Spanish.pdf">Ver CV Español <img src="/img/arrow_link.svg" alt="" />  </a>
                        </button>
                    </div>
                    <img className={styles.flag} src="/img/spain_flag.svg" alt="" />
                </li>

                <li>
                    <div>
                        <section>
                            <h3>English</h3>
                            <span>B1 Level</span>
                            <p>Meetings, daily communication,<br /> English documentation and technical resources.</p>
                        </section>
                        <button>
                            <a href="/utils/English.pdf"> View English CV<img src="/img/arrow_link.svg" alt="" /> </a>
                        </button>
                    </div>
                    <img className={styles.flag} src="/img/usa_flag.svg" alt="" />
                </li>
            </ul>

        </div>
    )
}
