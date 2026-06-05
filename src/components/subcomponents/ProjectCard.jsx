export default function ProjectCard({ top_date, bottom_date, title, date, paragraph, photo, l1, l2, l2_width, l3, link }) {
    return (
        // se pasa el style porque sirve para aplicar estilos en lineas al elemento
        <div className="project-card">
            <p className="project-card__date">{top_date}</p>
        <section className="project-card__article">
                <span className="project-card__article--border-top"></span>
            <header>
                <h1> <a href={link}>{title}</a></h1>
                <p>{paragraph}</p>
            </header>
            <img className="imgPrincipal" src={photo} alt="" />
            <nav>
                <ul>
                    <img src={l1} alt="" />
                    <img src={l2} alt="" style={{ width: l2_width || "26px", height: "26px" }} />
                    {l3 ? <img src={l3} alt="" /> : null}
                </ul>

                <a href={link} >
                    <img className="arrow_link" src="/img/arrow_link.svg" alt="" />
                </a>
            </nav>

        </section>
            <p className="project-card__date">{bottom_date}</p>
        </div>
    )
}