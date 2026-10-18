import Technology from "./Technology";

import styles from "./Expertise.module.css"
import HeaderBtn from "../subcomponents/headerBtn/HeaderBtn";

export default function Expertise() {
    return (
        <div className={styles.technologies}>
            <HeaderBtn title="Expertise" />

            <h3>· Client <span> </span></h3>
            <section className={styles.technologies_section}>
                <Technology title="HTML" img={"/img/html_logotipe.png"} category={"Client"} />
                <Technology title="Typescript" img={"/img/Typescript.svg"} category={"Client"} />
                <Technology title="React" img={"/img/react_logotipe.svg"} category={"Framework"} />
                <Technology title="TailwindCSS" img={"/img/tailwindcss.png"} category={"Client"} />
            </section>

            <h3>· Sever <span> </span></h3>
            <section className={styles.technologies_section}>
                <Technology title="MySQL" img={"/img/mysql_logotipe.png"} category={"DB"} />
                <Technology title="Java" img={"/img/java_logotipe.svg"} category={"Server"} />
                <Technology title="Spring Boot" img={"/img/SpringBoot.svg"} category={"Framework"} />
            </section>


                {/* 
            <h3>· AI Integration - Testing <span> </span> </h3>
            <section className={styles.technologies_section}>
                <Technology title="Python" category={"AI"} img={"/img/Python.svg"} />            
                <Technology title="JUnit" img={"/img/Junit.svg"} category={"Java Tests"} />
                <Technology title="Vitest" img={"/img/Vitest.svg"} category={"JS Tests"} />
                <Technology title="Docker" img={"/img/Docker.svg"} category={"Deployment"} />
                <Technology title="Github Actions" img={"/img/github.svg"} category={"CI / CD"} />
            </section>
                */}


            <h3>· Tools <span> </span></h3>
            <section className={styles.technologies_section}>
                <Technology title="GIT" category={"Workspace"} img={"/img/git_logotipe.png"} />
                <Technology title="Wordpress" img={"/img/wordpress.svg"} category={"CMS"} />
                <Technology title="Slack" img={"/img/slack.svg"} category={"Workspace"} />
            </section>


        </div>
    )
}
