import React from 'react'


import styles from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'
import peopleImg1 from '../../images/shutterstock_549199228.jpg'
import peopleImg2 from '../../images/shutterstock_614907056.jpg'
import peopleImg3 from '../../images/shutterstock_1046607349.jpg'
import peopleImg4 from '../../images/shutterstock_1183623769.jpg'
import peopleImg5 from '../../images/shutterstock_1937300755.jpg'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <section className={styles.welcomeContainer}>
        <h1>
          Survey
          <FontAwesomeIcon icon={faShieldDog} />
          Hound
        </h1>
        <h2 className={styles.welcome}>Collect feedback from your users!</h2>
        <button>Get Started</button>
      </section>

      <section className={styles.preview}>
        <h3>Join more than 19 million active users worldwide</h3>

        <ul>
          <li>
            <img src={peopleImg1} />
          </li>
          <li>
            <img src={peopleImg2} />
          </li>
          <li>
            <img src={peopleImg3} />
          </li>
          <li>
            <img src={peopleImg4} />
          </li>
          <li>
            <img src={peopleImg5} />
          </li>
        </ul>

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
