import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Languages() {
    return (
        <div className="languages-sec">
                <ButtonHeader title={"Languages"} />

                <div className="languages-sec__cards">

                <section>
                    <a href="/utils/Spanish.pdf">Ver CV <img src="/img/arrow_link.svg" alt="" />  </a>
                    <div className="descriptive-img descriptive-img__modified">
                        <section>
                            <h4>Spanish</h4>
                            <span>Native Speaker</span>
                        </section>
                        <img src="/img/spain_flag.svg" alt="" />
                    </div>
                </section>

                <section>
                    <a href="/utils/English.pdf"> View CV<img src="/img/arrow_link.svg" alt="" /> </a>
                    <div className="descriptive-img descriptive-img__modified">
                        <section>
                            <h4>English</h4>
                            <span>B1 Level</span>
                        </section>
                        <img src="/img/usa_flag.svg" alt="" />
                    </div>
                </section>

                             
                </div>

        </div>
    )
}

/* 
 <section className="curriculums">
                    <a href="/utils/Spanish.pdf" target="_blank">
                        <span>Spanish CV</span>
                        <img src="/img/spain_flag.svg" alt="" />
                    </a>
                    <a href="/utils/English.pdf" target="_blank">
                        <span>English CV</span>
                        <img src="/img/usa_flag.svg" alt="" />
                    </a>
                </section>
*/