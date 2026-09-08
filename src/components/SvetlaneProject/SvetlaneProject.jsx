import React from 'react'
import react from '../../../public/img/react_logotipe.svg'
import mysql from '../../../public/img/mysql_logotipe.png'
import java from '../../../public/img/java_logotipe.svg'

import style from './SvetlaneProject.module.css';

export default function SvetlaneProject() {
  return (
    <div className={style.mockup}>
      <img className={style.imgMockup} src="/img/mockup.png" alt="Mockup" />

      <section>

        <div className={style.header}>

          <header>
            <div>
              <a href="https://svetlane.vercel.app"><h1 className="animated_white_basic">Svetlane</h1>
              </a>

              <span>App</span>
            </div>
            <p>2026 • Language Learning </p>
          </header>

          <div className={style.technologies}>
            <img src={react} alt="" />
            <img src={mysql} alt="" />
            <img src={java} alt="" />
          </div>
        </div>


        <p>Designed a modular architecture that separates business logic, UI components, API communications,
          making the application easier to scale and maintain while supporting AI functionalities such as OpenAI. </p>
      </section>


    </div>
  )
}