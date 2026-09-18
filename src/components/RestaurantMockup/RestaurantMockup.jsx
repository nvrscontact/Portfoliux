import React from 'react'

import style from './RestaurantMockup.module.css';
import wordpress from '../../../public/img/wordpress.svg'
import woocommerce from '../../../public/img/woocommerce.svg'

export default function RestaurantMockup() {
  return (
    <div className={style.mockup}>
      <img className={style.imgMockup} src="/img/mockup.png" alt="Mockup" />

      <section className={style.infoCard}>

        <header>

          <section>
            <div>
              <h1><a>Rosetti's Rest</a></h1>
            </div>
            <p>2026 • Restaurant </p>
          </section>

          <section className={style.technologies}>
            <img src={woocommerce} alt="" />
            <img src={wordpress} alt="" />

          </section>
        </header>


        <p>Designed a modular architecture that separates business logic, UI components, API communications,
          making the application easier to scale and maintain while supporting AI functionalities such as OpenAI. </p>
      </section>


    </div>
  )
}