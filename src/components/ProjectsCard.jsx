import ProjectCard from "./subcomponents/ProjectCard";

export default function ProjectsCards(){
    return(
        <section className="projectsCard">

        <ProjectCard title={"Artist Portfolio"} date={"February 2025"} 
        photo={"public/img/restaurant.webp"} 
        paragraph={"View menus, schedules, events and make reservations to anybody"}
        l1={"public/img/react.svg"} l2={"public/img/css.png"} 
        link={"https://singerx.vercel.app/"}/>

          <ProjectCard title={"Rosetti's Hotel"} date={"February 2025"} 
        photo={"public/img/restaurant.webp"} 
        paragraph={"Social network with encrypted conversations and publications"}
        l1={"public/img/react.svg"} l2={"public/img/css.png"} 
        link={"https://rosettihotel.vercel.app/"} speSection={310} spePhoto={160} />

          <ProjectCard title={"Candies Center"} date={"February 2025"} 
        photo={"public/img/restaurant.webp"} 
        paragraph={"Get training guides from personal trainers and view progress"}
        l1={"public/img/react.svg"} l2={"public/img/css.png"} 
        link={"https://candiesx.vercel.app/"}/>


        </section>
    )
}