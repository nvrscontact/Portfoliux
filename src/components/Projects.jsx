import ProjectCard from "./subcomponents/ProjectCard";

export default function Projects() {
  return (
    <section className="projects_cards">

      <div>
        <ProjectCard
          title={"Artist"}
          bottom_date={"January 2025"}
          photo={"/img/artistBackground.jpg"}
          paragraph={"Listen favorites albums on platforms with links, buy albums and view date of next conerts"}
          l1={"/img/react_logotipe.svg"}
          l1_name="React"
          l2={"/img/mysql_logotipe.png"}
          l2_name="MySQL"
          l3={"/img/php_logotipe.svg"}
          l3_name="PHP"
          link={"https://singerstore.vercel.app/"} />
      </div>

      <div>

        <ProjectCard
          title={"Svetlane"}
          top_date={"June 2026"}
          photo={"/img/svetlane.jpg"}
          paragraph={"Application to learn lenguages effectively, with voice and image recognition by AI services."}
          l1={"/img/react_logotipe.svg"}
          l1_name="React"
          l2={"/img/java_logotipe.svg"}
          l2_name="Java"
          l3={"/img/mysql_logotipe.png"}
          l3_name="MySQL"
          link={"https://svetlane.vercel.app//"}
        //  speSection={310} spePhoto={165}
        />
      </div>

      <div>
        <ProjectCard
          title={"Candix"}
          bottom_date={"March 2025"}
          photo={"/img/candiesBackground.jpg"}
          paragraph={"Order cupcakes, view gallery of cakes and make purchases in your preffered language"}
          l1={"/img/react_logotipe.svg"} 
          l1_name="React"
          l2={"/img/css_logotipe.png"}
          l2_name="CSS"
          
          link={"https://candiesweb.vercel.app/"} />
      </div>


    </section>
  )
}