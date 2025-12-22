import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function Technologies(){
    return(
        <div className="center">
            <ButtonHeader title="Technologies"/>
        <section className="technologies">

                <Technology title="Javascript" img={"/img/javascript.png"}/>
                <Technology title="HTML" img={"/img/html.png"}/>
                <Technology title="GIT" img={"/img/git.png"}/>
                <Technology title="CSS" img={"/img/css.png"}/>
                <Technology title="Tailwind" img={"/img/tailwind.png"}/>
                <Technology title="Github" img={"/img/github.svg"}/>
        </section>
        </div>
    )
}
