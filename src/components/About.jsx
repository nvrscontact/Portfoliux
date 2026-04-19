import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function About() {
    return (
        <div className="aboutGrid center">
            <ButtonHeader title={"About me"} />
            <section className="aboutMe">

                <ul>
                    <li>Good in team environments</li> 
                    <li>Scrum and Kanban Metodologies</li> 
                    <li>Commitment to delivery</li>
                    <li>Focused on the project</li>
                    <li>Fast Learning</li>
                </ul>

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