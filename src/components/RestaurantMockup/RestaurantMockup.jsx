import React from 'react'

import style from './RestaurantMockup.module.css';
import wordpress from '../../../public/img/wordpress.svg'
import woocommerce from '../../../public/img/woocommerce.svg'

export default function RestaurantMockup() {
  return (
    <div className={style.mockup}>
      <img className={style.imgMockup} src="/img/mockup.png" alt="Mockup" />

      <section>

        <div className={style.header}>

          <header>
            <div>
              <a><h1>Rosetti's Rest</h1>
              </a>
            </div>
            <p>2026 • Restaurant </p>
          </header>

          <div className={style.technologies}>
            <img src={woocommerce} alt="" />
            <img src={wordpress} alt="" />

          </div>
        </div>


        <p>Designed a modular architecture that separates business logic, UI components, API communications,
          making the application easier to scale and maintain while supporting AI functionalities such as OpenAI. </p>
      </section>


    </div>
  )
}