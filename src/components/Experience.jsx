import HeaderBtn from "./subcomponents/HeaderBtn";

export default function Experience({ }) {
    return (
        <div className="generic-information-sec generic-information-sec__experience">
            <HeaderBtn title={"Experience"} />
            <section className="">

                <article>
                    <header>
                        <h1>Kebes</h1>
                        <img src="/img/spain_flag.svg" alt="" />
                    </header>
                    <div>
                    <h3>2026 — 1 Month</h3>
                    </div>
                    <p>Designing and deploying Wordpress web pages <br /> on cPanel and using Astra Pro plugin</p>
                </article>

            </section>
        </div>
    )
}

