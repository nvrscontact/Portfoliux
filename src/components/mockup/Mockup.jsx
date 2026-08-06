import React from 'react'

import style from './Mockup.module.css';

function Mockup() {
  return (
    <div className={style.mockup}>
      <img src="/img/mockup.png" alt="Mockup" />

      <section>

        <header>
          <div>
            <a href="https://svetlane.vercel.app"><h1 className="special_relucient">Svetlane</h1>
            </a>

            <span>App</span>
          </div>
          <p>2026 • Language Learning </p>
        </header>


        <p>Designed a modular architecture that separates business logic, UI components, API communications,
          making the application easier to scale and maintain while supporting AI functionalities such as OpenAI. </p>
      </section>


    </div>
  )
}

export default Mockup