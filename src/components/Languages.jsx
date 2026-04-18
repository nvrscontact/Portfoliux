import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Languages() {
    return (
        <div className="languages center">
            <ButtonHeader title={"Languages"} />
            <section className="list_design">
                <div>
                    <h1>Spanish <span>Native</span></h1>
                    <img src="/img/spain_flag.svg" alt="" />
                </div>
                <div>
                    <h1>English <span>B1</span></h1>
                    <img src="/img/usa_flag.svg" alt="" />
                </div>
            </section>
        </div>
    )
}