import Technology from "./Technology";

import styles from "./Expertise.module.css"
import HeaderBtn from "../subcomponents/headerBtn/HeaderBtn";

export default function Expertise() {
    return (
        <div className={styles.technologies}>
            <HeaderBtn title="Expertise" />
            <section className={styles.technologies_section}>
                <Technology title="HTML" img={"/img/html_logotipe.png"} category={"Frontend"} />
                <Technology title="Javascript" img={"/img/js_logotipe.png"} category={"Frontend"} />
                <Technology title="React" img={"/img/react_logotipe.svg"} category={"Framework"} />
                <Technology title="TailwindCSS" img={"/img/tailwindcss.png"} category={"Frontend"} />
            </section>

            <section className={styles.technologies_section}>
                <Technology title="MySQL" img={"/img/mysql_logotipe.png"} category={"DB"} />
                <Technology title="Java" img={"/img/java_logotipe.svg"} category={"Backend"} />
                <Technology title="Spring Boot" img={"/img/SpringBoot.svg"} category={"Framework"} />

            </section>

            <section className={styles.technologies_section}>
                <Technology title="GIT" category={"Workspace"} img={"/img/git_logotipe.png"} />
                <Technology title="Wordpress" img={"/img/wordpress.svg"} category={"CMS"} />
                <Technology title="Slack" img={"/img/slack.svg"} category={"Workspace"} />

            </section>

        </div>
    )
}
