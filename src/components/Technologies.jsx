import ButtonHeader from "./subcomponents/ButtonHeader";
import Technology from "./subcomponents/Technology";

export default function Technologies() {
    return (
        <div className="center">
            <ButtonHeader title="Technologies" />
            <section className="technologies">
                <Technology title="Javascript" img={"/img/js_logotipe.png"} />
                <Technology title="HTML" img={"/img/html_logotipe.png"} />
                <Technology title="CSS" img={"/img/css_logotipe.png"} />
                <Technology title="GIT" img={"/img/git_logotipe.png"} />
                <Technology title="Tailwind" img={"/img/tailwind_logotipe.png"} />
                <Technology title="Java" img={"/img/java_logotipe.svg"} />
                <Technology title="Mysql" img={"/img/mysql_logotipe.svg"} heightImg={"40px"} />
                <Technology title="React" img={"/img/react_logotipe.svg"} />
            </section>
        </div>
    )
}
