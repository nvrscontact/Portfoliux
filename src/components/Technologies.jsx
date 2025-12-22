import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function Technologies(){
    return(
        <div className="center">
            <ButtonHeader title="Technologies"/>
        <section className="technologies">

                <Technology title="Javascript" img={"public/img/javascript.png"}/>
                <Technology title="HTML" img={"public/img/html.png"}/>
                <Technology title="GIT" img={"public/img/git.png"}/>
                <Technology title="CSS" img={"public/img/css.png"}/>
                <Technology title="Tailwind" img={"public/img/tailwind.png"}/>
                <Technology title="Github" img={"public/img/github.svg"}/>
        </section>
        </div>
    )
}
