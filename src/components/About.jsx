import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function About() {
    return (
        <div className="center">
            <ButtonHeader title={"About me"} />
            <section className="aboutMe">

                <section className="technologies">
                    <Technology title="Asana" img={"/img/asana_logotipe.svg"} />
                    <Technology title="Trello" img={"/img/trello_logotipe.svg"} />
                    <Technology title="Slack" img={"/img/slack_logotipe.svg"} />
                    <Technology title="Figma" img={"/img/figma_logotipe.svg"} />
                </section>

                <ul>
                    <li>Managment of Scrum and Kanban Metodologies</li>
                    <li>Commitment to delivery</li>
                    <li>Be focused on the project to obtain a professional and detailed website.</li>
                </ul>


                <p> 
                    <a href="/utils/Spanish.pdf" target="_blank">    
                        <img src="/img/spain_flag.svg" alt="" />
                        <span>Spanish CV</span>
                    </a>
                    <a href="">
                        <img src="/img/arrow_link.svg" alt="" />
                    </a>
                </p>

                   <p> 
                    <a href="/utils/Spanish.pdf" target="_blank">    
                        <img src="/img/usa_flag.svg" alt="" />
                        <span>English CV</span>
                    </a>
                    <a href="">
                        <img src="/img/arrow_link.svg" alt="" />
                    </a>
                </p>
            
            </section>
        </div>
    )
}