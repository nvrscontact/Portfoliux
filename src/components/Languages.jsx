import HeaderBtn from "./subcomponents/HeaderBtn";

export default function Languages() {
    return (
        <div className="languages-sec">
            <HeaderBtn title={"Languages"} />
            <div className="languages-sec__cards">

                <section>
                    <div className="descriptive-img descriptive-img__modified">
                        <img className="descriptive-img--country" src="/img/spain_flag.svg" alt="" />
                        <section>
                            <h4>Spanish</h4>
                            <span>Native Speaker</span>
                        </section>
                    </div>
                    <div>
                        <a href="/utils/Spanish.pdf">Ver CV Español <img src="/img/arrow_link.svg" alt="" />  </a>
                    </div>
                </section>

                <section>
                    <div className="descriptive-img descriptive-img__modified">
                        <img className="descriptive-img--country" src="/img/usa_flag.svg" alt="" />
                        <section>
                            <h4>English</h4>
                            <span>B1 Level</span>
                        </section>
                    </div>
                    <div>

                        <a href="/utils/English.pdf"> View English CV<img src="/img/arrow_link.svg" alt="" /> </a>
                    </div>
                </section>
            </div>

        </div>
    )
}
