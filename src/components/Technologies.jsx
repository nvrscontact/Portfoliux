import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function Technologies() {
    return (
        <div className="center">
            <ButtonHeader title="Technologies " />
            <section className="technologies">

                <Technology title="HTML" img={"/img/html_logotipe.png"} />
                <Technology title="CSS" img={"/img/css_logotipe.png"} />
                <Technology title="Javascript" img={"/img/js_logotipe.png"} heightImg={34} />
                <Technology title="GIT" img={"/img/git_logotipe.png"} />
                <Technology title="Tailwind" img={"/img/tailwind_logotipe.png"} heightImg={46} />
                <Technology title="Java" img={"/img/java_logotipe.svg"} />
                <Technology title="React" img={"/img/react_logotipe.svg"} heightImg={38} />
                <Technology title="Mysql" img={"/img/mysql_logotipe.png"} heightImg={44} />
            </section>
        </div>
    )
}
