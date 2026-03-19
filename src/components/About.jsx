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
                    <Technology title="Figma" img={"/img/figma.svg"} />
                </section>

                <ul>
                    <li>Scrum and Kanban Metodologies</li>
                    <li>Commitment to delivery</li>
                    <li>Focus on the project</li>
                    <li>Prototipes before starting the project</li>
                </ul>


                <a href="/utils/Spanish.pdf" target="_blank">
                    <img src="/img/spain.svg" alt="" />
                    Spanish Curriculum
                    <img src="/img/arrow_link.svg" alt="" />
                </a>
                
                <a href="/utils/English.pdf" target="_blank">
                    <img src="/img/usa.svg" alt="" />
                    English Curriculum
                    <img src="/img/arrow_link.svg" alt="" />
                </a>
            </section>
        </div>
    )
}