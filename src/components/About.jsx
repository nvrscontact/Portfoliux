import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function About() {
    return (
        <div className="aboutGrid center about_me_component">
            <ButtonHeader title={"About me"} />
            <section className="list_design ">
                <div>
                    <h1>Slack <span>agile</span></h1>
                    <span>
                        <img src="/img/slack_logotipe.svg" alt="" />
                    </span>
                </div>
                <div>
                    <h1>Asana <span>agile</span></h1>
                    <img src="/img/asana_logotipe.svg" alt="" />
                </div>
            </section>

            <section>
                <span>Kanban</span>
                <span>Scrum</span>
            </section>
        </div>
    )
}