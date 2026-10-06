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
                            <h2>Frontend Developer - Kebes</h2>
                            <h3>2026 • Internships, Alicante.</h3>
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
