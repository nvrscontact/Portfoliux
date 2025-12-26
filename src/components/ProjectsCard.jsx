import ProjectCard from "./subcomponents/ProjectCard";

export default function ProjectsCards(){
    return(
        <section className="projectsCard">

        <ProjectCard title={"Artist Portfolio"} date={"February 2025"} 
        photo={"/img/restaurant.webp"} 
        paragraph={"View menus, schedules, events and make reservations to anybody"}
        l1={"/img/react.svg"} l2={"/img/css.png"} 
        link={"https://singingartist.vercel.app/"}/>

          <ProjectCard title={"Sokovia's Hotel"} date={"February 2025"} 
        photo={"/img/restaurant.webp"} 
        paragraph={"Social network with encrypted conversations and publications"}
        l1={"/img/react.svg"} l2={"/img/css.png"} 
        link={"https://sokoviahotel.vercel.app/"} speSection={310} spePhoto={165} />

          <ProjectCard title={"Candies Center"} date={"February 2025"} 
        photo={"/img/restaurant.webp"} 
        paragraph={"Get training guides from personal trainers and view progress"}
        l1={"/img/react.svg"} l2={"/img/css.png"} 
        link={"https://candiesweb.vercel.app/"}/>


        </section>
    )
}