import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function Technologies() {
    return (
        <div className="center">
            <ButtonHeader title="Technologies " />
            <section className="technologies">

                <Technology title="HTML" img={"/img/html_logotipe.png"} />
                <Technology title="CSS" img={"/img/css_logotipe.png"} />
                <Technology title="Javascript" img={"/img/js_logotipe.png"} heightImg={32} />
                <Technology title="GIT" img={"/img/git_logotipe.png"} />
                <Technology title="Tailwind" img={"/img/tailwind_logotipe.png"} />
                <Technology title="Asana" img={"/img/asana_logotipe.svg"} heightImg={28} />
                <Technology title="Java" img={"/img/java_logotipe.svg"} />
                <Technology title="Mysql" img={"/img/mysql_logotipe.svg"} />
                <Technology title="React" img={"/img/react_logotipe.svg"} />

            </section>
        </div>
    )
}
