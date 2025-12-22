import ButtonHeader from "./subcomponents/ButtonHeader";

export default function About(){
    return(
        <div className="center">
            <ButtonHeader title={"About me"}/>
        <section className="aboutMe">

            <a href="/utils/curriculum.pdf" target="_blank">
            View Curriculum
            <img src="/img/arrow_link.svg" alt="" /></a>
        </section>
        </div>
    )
}