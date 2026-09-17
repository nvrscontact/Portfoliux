import HeaderBtn from "../subcomponents/headerBtn/HeaderBtn";

import styles from './Experience.module.css';

export default function Experience({ }) {
    return (
        <div className={styles.certificationsContainer}>
            <HeaderBtn title={"Experience"} />
            <section className="">

                <article>
                    <header>
                        <div>
                            <h1>Kebes — 2026</h1>
                            <h2>1 month • Internships</h2>
                        </div>
                        <img src="/img/spain_flag.svg" alt="" />
                    </header>
                    <p>Designing and deploying Wordpress web pages on cPanel and using Astra Pro plugin.</p>
                </article>

            </section>
        </div>
    )
}

<p></p>
