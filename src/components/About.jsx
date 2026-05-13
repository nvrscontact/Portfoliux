import ButtonHeader from "./subcomponents/ButtonHeader";

export default function About() {
    return (
        <div className="aboutGrid center about_me_component">
            <ButtonHeader title={"About me"} />
            <section className="technologies_icon">
                <div>
                    <img src="/img/asana_logotipe.svg" alt="" />
                    <span>Asana</span>
                </div>
                <div>
                    <img src="/img/trello_logotipe.svg" alt="" />
                    <span>Trello</span>
                </div>
                        <div>
                    <img src="/img/slack_logotipe.svg" alt="" />
                    <span>Slack</span>
                </div>
            </section>

            <section>
                <p>Kanban & Scrum</p>
                <span>agile methodologies</span>
            </section>
        </div>
    )
}