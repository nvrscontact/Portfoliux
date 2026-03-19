import ButtonHeader from "./subcomponents/ButtonHeader";

export default function Services({ }) {
    return (
        <div className="center">
            <ButtonHeader title={"Services"} />
            <section className="list_design services">
                <div>
                    <h1>Web Development</h1>
                    <img src="/img/arrow_link.svg" alt="" />
                </div>
            </section>
        </div>
    )
}

