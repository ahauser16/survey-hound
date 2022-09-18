import React from 'react'
import { Link } from 'react-router-dom'

import styles from './LogoLink.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'

const LogoLink = ({ auth }) => {
  return (
    <div className={styles.logoLinkContainer}>
      <Link
        to={{ auth } ? '/surveys' : '/'}
        aria-label="Link to home page."
        className={styles.logoLink}
      >
        <h2>
          Survey
          <FontAwesomeIcon
            icon={faShieldDog}
            type="image"
            alt="SurveyHound Logo"
            loading="lazy"
            className={styles.logoImg}
          />
          Hound
        </h2>
      </Link>
    </div>
  )
}

export default LogoLink
