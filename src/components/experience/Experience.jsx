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
                            <h2>Kebes — 2026</h2>
                            <h3>1 month • Internships</h3>
                        </div>
                        <img src="/img/spain_flag.svg" alt="" />
                    </header>
                    <p>Designing and deploying Wordpress web pages <br /> on cPanel and using Astra Pro plugin.</p>
                </article>

            </section>
        </div>
    )
}

<p></p>
