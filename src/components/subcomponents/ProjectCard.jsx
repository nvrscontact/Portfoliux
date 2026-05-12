export default function ProjectCard({title,date,paragraph,photo,l1,l2,l2_width,l3,link }){
    return(
        // se pasa el style porque sirve para aplicar estilos en lineas al elemento
        <section className="projectCard">
            <header>
                <h1> <a href={link} className="animated_white_basic">{title}</a></h1>
                    <div>
                        <span className="lineDate"></span>
                        <span className="date">{date}</span>
                        <span className="lineDate"></span>
                    </div>
                <p>{paragraph}</p>
            </header>
            <img className="imgPrincipal" src={photo} alt="" />
            <nav>
                <ul>
                        <img src={l1} alt="" />
                        <img src={l2} alt="" style={{width: l2_width || "26px", height: "26px"}} />
                        {l3 ? <img src={l3} alt="" /> : null }
                        
                </ul>

                <a href={link}>
                    <img src="/img/arrow_link.svg" alt="" />
                </a>
            </nav>

        </section>
    )
}