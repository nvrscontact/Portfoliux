import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function About() {
    return (
        <div className="center">
            <ButtonHeader title={"About me"} />
            <section className="aboutMe">

                <section className="technologies">
                    <Technology title="Asana" img={"/img/asana.svg"} />
                    <Technology title="Trello" img={"/img/trello.svg"} />
                    <Technology title="Slack" img={"/img/slack.svg"} />
                </section>


                <a href="/utils/curriculum.pdf" target="_blank">
                    View Curriculum
                    <img src="/img/arrow_link.svg" alt="" /></a>
            </section>
        </div>
    )
}