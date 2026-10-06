import React from 'react'
import HeaderBtn from '../subcomponents/headerBtn/HeaderBtn'

import styles from './Certifications.module.css';

export default function Certifications() {
    return (
        <div className={styles.certificationsContainer}>
            <HeaderBtn title={"Certifications"} />
            <section>

                <article>
                    <header>
                        <img src="/img/spain_flag.svg" alt="" />
                        <div>
                            <h2>Business English - EACE</h2>
                            <h3>2025 • Alicante </h3>
                        </div>
                    </header>
                    <p>Learning about work vocabulary, email professionals, daily work vocabulary.</p>
                </article>

            </section>
        </div>
    )
}
