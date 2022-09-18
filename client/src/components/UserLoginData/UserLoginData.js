import React from 'react'
import Payments from '../Payments/Payments'
import styles from './UserLoginData.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const UserLoginData = ({ auth }) => {
  return (
    <ul className={styles.userContainer}>
      <React.Fragment>
        {() => {
          switch (auth) {
            case null:
              return 'test was null'
            case false:
              return (
                <li className={styles.loginContainer}>
                  <a className={styles.loginLink} href="/auth/google">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className={styles.googleIcon}
                    ></FontAwesomeIcon>
                    <h2 className={styles.googleText}>oogle Login</h2>
                  </a>
                </li>
              )
            default:
              return [
                <li key="1" className={styles.paymentsContainer}>
                  <Payments />
                </li>,
                <li key="3" className={styles.creditsContainer}>
                  {auth.credits} CREDITS
                </li>,
                <li key="2" className={styles.logoutContainer}>
                  <a className={styles.loginLink} href="/api/logout">
                    <button>LOGOUT</button>
                  </a>
                </li>,
              ]
          }
        }}
      </React.Fragment>
    </ul>
  )
}

export default UserLoginData
