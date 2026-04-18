import ProjectCard from "./subcomponents/ProjectCard";

export default function ProjectsCards(){
    return(
        <section className="projectsCard">

        <ProjectCard title={"Artist Website"} date={"January 2025"} 
        photo={"/img/artistBackground.jpg"} 
        paragraph={"Listen favorites albums on available platforms and purchase albums"}
        l1={"/img/react_logotipe.svg"} l2={"/img/css_logotipe.png"} 
        link={"https://singingartist.vercel.app/"}/>

          <ProjectCard title={"Sokovia's Hotel"} date={"February 2025"} 
        photo={"/img/hotelBackground.jpg"} 
        paragraph={"View menus, schedules, events and make reservations"}
        l1={"/img/react_logotipe.svg"} l2={"/img/css_logotipe.png"} 
        link={"https://sokoviahotel.vercel.app/"} speSection={310} spePhoto={165} />

          <ProjectCard title={"Candies Center"} date={"March 2025"} 
        photo={"/img/candiesBackground.jpg"} 
        paragraph={"Cupcakes and cakes, and make purchases"}
        l1={"/img/react_logotipe.svg"} l2={"/img/css_logotipe.png"} 
        link={"https://candiesweb.vercel.app/"}/>


        </section>
    )
}