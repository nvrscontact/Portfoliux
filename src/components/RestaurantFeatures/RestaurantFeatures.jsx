import React from 'react'

import styles from './RestaurantFeatures.module.css'

function RestaurantFeatures() {
  return (
    <div className={styles.container}>

        <section>

        <p>Google Reviews</p>
        <p>Register and Login with Google</p>
        <p>Whatsapp Button</p>
        <p>Online Reservations</p>
        <p>Place orders online</p>
        <p>Quick access to PDF Menu</p>
        <p>Multi-Language: English and Spanish</p>
        </section>

        <section>
        <p>Google Maps widget</p>
        <p>Dishes gallery</p>
        <p>Privacy Policy, Terms and Conditions</p>
        <p>Cookies</p>
        <p>Contact Forms</p>
        <p>Instagram Widget Posts</p>
        </section>

        <p></p>        

    </div>
  )
}

export default RestaurantFeatures