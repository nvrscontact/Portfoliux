import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Languages() {
    return (
        <div className="center">
            <ButtonHeader title={"Languages"} />
            <section className="languages list_design">
                <div>
                    <h1>Spanish <span>Native</span></h1>
                    <img src="/img/spain_flag.svg" alt="" />
                </div>
                <section className="curriculum_link">
                 <a href="/utils/Spanish.pdf" target="_blank">
                        <img src="/img/arrow_right.svg" alt="" />
                        <span>Revisar CV</span>
                    </a>
                </section>
                <div>
                    <h1>English <span>B1</span></h1>
                    <img src="/img/usa_flag.svg" alt="" />
                </div>
                <section className="curriculum_link">
                     <a href="/utils/English.pdf" target="_blank">
                        <img src="/img/arrow_right.svg" alt="" />
                        <span>Check CV</span>
                    </a>
                </section>
            </section>
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