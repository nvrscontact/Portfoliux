import React from 'react'
import react from '../../../public/img/react_logotipe.svg'
import mysql from '../../../public/img/mysql_logotipe.png'
import java from '../../../public/img/java_logotipe.svg'

import style from './SvetlaneProject.module.css';

export default function SvetlaneProject() {
  return (
    <div className={style.mockup}>
      <img className={style.imgMockup} src="/img/mockup.png" alt="Mockup" />

      <section className={style.infoCard}>

        <header>

          <section>
            <div>
              <h1 className={style.wordAnimated}><a href="https://svetlane.vercel.app">Svetlane</a></h1>
              <span>App</span>
            </div>

            <h2>2026 • Language Learning </h2>
          </section>


          <section className={style.technologies}>
            <img src={react} alt="" />
            <img src={mysql} alt="" />
            <img src={java} alt="" />
          </section>
        </header>

        <p>Designed a modular architecture that separates business logic, UI components, API communications,
          making the application easier to scale and maintain while supporting AI functionalities such as OpenAI. </p>



      </section>
    </div>
  )
}