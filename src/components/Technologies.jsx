import HeaderBtn from "./subcomponents/HeaderBtn";
import Technology from "./subcomponents/Technology";

export default function Technologies() {
    return (
        <div className="technologies_sec">
            <img className="technologies_sec--img-behind" src="/img/card_dots.svg" alt="" />
            <HeaderBtn title="Technologies" />
            <section className="technologies_sec--article">
                <Technology title="HTML" img={"/img/html_logotipe.png"} category={"Frontend"} />
                <Technology title="CSS" img={"/img/css_logotipe.png"} category={"Frontend"} />
                <Technology title="Javascript" img={"/img/js_logotipe.png"} category={"Frontend"} />
                <Technology title="GIT" img={"/img/git_logotipe.png"} />
                <Technology title="Tailwind" img={"/img/tailwind_logotipe.png"} heightImg={60} category={"Frontend"}  />
                <Technology title="Java" img={"/img/java_logotipe.svg"} category={"Backend"} />
                <Technology title="React" img={"/img/react_logotipe.svg"} category={"Frontend"} />
                <Technology title="MySQL" img={"/img/mysql_logotipe.png"} category={"Backend"} />
            </section>
        </div>
    )
}
