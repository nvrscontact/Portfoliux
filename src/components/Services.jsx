import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Services({ }) {
    return (
        <div className="center">
            <ButtonHeader title={"Services"} />
            <section className="services list_design">
                <div>
                    <h1>FullStack Development</h1>
                    <img src="/img/arrow_link.svg" alt="" />
                </div>
            </section>
        </div>
    )
}

