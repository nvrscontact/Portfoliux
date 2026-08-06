import React from 'react'
import HeaderBtn from '../subcomponents/headerBtn/HeaderBtn'

import styles from './Certifications.module.css';

export default function Certifications() {
    return (
        <div className={styles.certificationsContainer}>
            <HeaderBtn title={"Certifications"} />
            <section className="">

                <article>
                    <header>
                        <img src="/img/spain_flag.svg" alt="" />
                        <div>
                            <h2>EACE — 2025</h2>
                            <h3>Business English</h3>
                        </div>
                    </header>
                    <p>Learning about work vocabulary,<br /> email professionals, daily work vocabulary.</p>
                </article>

            </section>
        </div>
    )
}
