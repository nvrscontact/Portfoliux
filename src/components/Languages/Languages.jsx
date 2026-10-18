import HeaderBtn from "../subcomponents/headerBtn/HeaderBtn";
import styles from "./Languages.module.css";

export default function Languages() {
  return (
    <div className={styles.languages}>
      <HeaderBtn title={"Languages"} />

      <article>
        <section>
          <img className={styles.flag} src="/img/spain_flag.svg" alt="" />
          <h2>
            <p></p> Spanish <span>Native</span>
          </h2>
        </section>
        <button>
          <a href="/utils/2026 Spanish CV - Alonso Nuñez.pdf">
            CV Español <img src="/img/Document.svg" alt="" />{" "}
          </a>
        </button>
      </article>

      <article>
        <section>
          <img className={styles.flag} src="/img/usa_flag.svg" alt="" />
          <h2>
            <p></p> English <span>B2</span>
          </h2>
        </section>
        <button>
          <a href="/utils/2026 English CV - Alonso Nuñez.pdf">
            English CV <img src="/img/Document.svg" alt="" />{" "}
          </a>
        </button>
      </article>
    </div>
  );
}

{
  /* 
  

*/
}
