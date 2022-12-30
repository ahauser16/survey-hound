import React from 'react'


import styles from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <section className={styles.welcomeContainer}>
        <div className={styles.hero}>
        <h1>
          Survey
          <FontAwesomeIcon icon={faShieldDog} />
          Hound
        </h1>
        <h2 className={styles.welcome}>Collect feedback from your users!</h2>
        </div>
        <button>Get Started</button>
      </section>

      <section className={styles.preview}>
        <h3>Join more than 19 million active users worldwide</h3>

        <h2>Choose a plan that works for you</h2>
        <h3>
          Get an individual plan with features that you need, or create a team
          instead!
        </h3>
      </section>
    </div>
  )
}

export default Landing
