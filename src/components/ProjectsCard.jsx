import ProjectCard from "./subcomponents/ProjectCard";

export default function ProjectsCards() {
  return (
    <section className="projectsCard">

      <div>
        <ProjectCard
          title={"Artist Website"}
          date={"January 2025"}
          photo={"/img/artistBackground.jpg"}
          paragraph={"Listen favorites albums on available platforms and purchase albums"}
          l1={"/img/react_logotipe.svg"}
          l2={"/img/mysql_logotipe.png"}
          l3={"/img/php_logotipe.svg"}
          link={"https://singerstore.vercel.app/"} />
      </div>

      <div>

        <ProjectCard
          title={"Sokovia's Hotel"}
          date={"February 2025"}
          photo={"/img/hotelBackground.jpg"}
          paragraph={"View menus, schedules, make reservations, view map of the hotel and gallery"}
          l1={"/img/react_logotipe.svg"}
          l2={"/img/css_logotipe.png"}

          link={"https://sokoviahotel.vercel.app/"}
        //  speSection={310} spePhoto={165}
        />
      </div>

      <div>
        <ProjectCard
          title={"Candies Center"}
          date={"March 2025"}
          photo={"/img/candiesBackground.jpg"}
          paragraph={"Order cupcakes, cakes, candies and view gallery of pastry"}
          l1={"/img/react_logotipe.svg"} l2={"/img/css_logotipe.png"}
          link={"https://candiesweb.vercel.app/"} />
      </div>


    </section>
  )
}