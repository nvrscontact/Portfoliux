import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function About() {
    return (
        <div className="aboutGrid center">
            <ButtonHeader title={"About me"} />
            <section className="technologies about_me_page">

                <Technology title="Slack" img={"/img/slack_logotipe.svg"} />
                <Technology title="Asana" img={"/img/asana_logotipe.svg"} />
                <Technology title="Trello" img={"/img/trello_logotipe.svg"} />

                <ul className="soft_skills">
                <li>Knowledge about Scrum and Kanban methodologies</li>
                <li>Attention to the global harmony and specially detail in UI components</li>
                <li>Trying step-by-step improving UX of websites</li>
                </ul>

            </section>
        </div>
    )
}