import React from 'react'
import HeaderBtn from './subcomponents/HeaderBtn'

export default function Certifications() {
    return (
        <div className="generic-information-sec generic-information-sec__certifications ">
            <HeaderBtn title={"Certifications"} />
            <section className="">

                <article>
                    <header>
                        <h1>Business English</h1>
                    </header>
                    <div>
                    <img src="/img/spain_flag.svg" alt="" />
                    <h3>EACE — 2025</h3>
                    </div>
                    <p>Learn about work vocabulary, email writting <br /> on cPanel and using Astra Pro plugin</p>
                </article>

            </section>
        </div>
    )
}
