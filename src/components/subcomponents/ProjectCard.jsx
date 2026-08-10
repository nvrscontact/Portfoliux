export default function ProjectCard({ top_date, title, date, paragraph, photo, l1, l1_name, l2, l2_name, l3, l3_name, link }) {
    return (
        // se pasa el style porque sirve para aplicar estilos en lineas al elemento
        <div className="project-card">
            <p className="project-card__date">{top_date}</p>
            <section className="project-card__article">
                <span className="project-card__article--border-top"></span>
                <header>
                    <h1> <a href={link}> <span>https://</span>{title}<span>.vercel.app</span></a> </h1>
                    <p>{paragraph}</p>
                </header>
                <img className="imgPrincipal" src={photo} alt="" />
            </section>
            <nav>
                <ul>
                    <li>
                        <img src={l1} alt="" />
                    </li>
                    <li>
                        <img src={l2} alt="" />
                    </li>
                    <li>
                        {l3 ? <img src={l3} alt="" /> : null}
                    </li>
                </ul>

                <a href={link} >
                    <img className="arrow_link" src="/img/arrow_link.svg" alt="" />
                </a>
            </nav>

        </div>
    )
}