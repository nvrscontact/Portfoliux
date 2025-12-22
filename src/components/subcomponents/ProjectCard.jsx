export default function ProjectCard({title,date,paragraph,photo,l1,l2,link,speSection, spePhoto }){
    return(
        <section className="projectCard" style={{height: speSection}}>
            <header>
                <h1 className="animated_white_basic">{title}</h1>
                    <div>
                        <span className="lineDate"></span>
                        <span>{date}</span>
                        <span className="lineDate"></span>
                    </div>
                <p>{paragraph}</p>
            </header>
            <img className="imgPrincipal" style={{height: spePhoto}} src={photo} alt="" />
            <nav>
                <ul>
                        <img src={l1} alt="" />
                        <img src={l2} alt="" />
                </ul>

                <a href={link}>
                    <img src="/img/arrow_link.svg" alt="" />
                </a>
            </nav>

        </section>
    )
}