import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function About() {
    return (
        <div className="aboutGrid center">
            <ButtonHeader title={"About me"} />
            <section className="technologies about_me_page">

                <Technology title="Slack" img={"/img/slack_logotipe.svg"} />
                <Technology title="Asana" img={"/img/asana_logotipe.svg"} />
                <Technology title="Trello" img={"/img/trello_logotipe.svg"} heightImg={32} />

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


            </section>
        </div>
    )
}