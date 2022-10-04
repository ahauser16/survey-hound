import React from 'react'
import Payments from '../Payments/Payments'
import styles from './UserLoginData.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { NavLink, Link } from 'react-router-dom'

const UserLoginData = ({ auth }) => {
  return (
    <ul className={styles.userContainer}>
      <React.Fragment>
        {auth ? (
          <React.Fragment>
            <li key="1">
              <Payments />
            </li>
            <li key="3">
              <h3>{auth.credits} CREDITS</h3>
            </li>
            <li key="2">
              <a href="/api/logout">
                <button className={styles.logoutBtn}>Log Out</button>
              </a>
              {/* <Link
                to="/api/logout"
                className={styles.loginLink}
                aria-label="Link to log out."
              >
                <button>Log Out</button>
              </Link> */}
            </li>
          </React.Fragment>
        ) : (
          <li className={styles.loginContainer}>
            <a href="/auth/google">
              <button className={styles.loginBtn}>
                <FontAwesomeIcon
                  icon={faGoogle}
                  className={styles.googleIcon}
                ></FontAwesomeIcon>
                <span className={styles.googleText}>oogle Login</span>
              </button>
            </a>
          </li>
        )}
      </React.Fragment>
    </ul>
  )
}

export default UserLoginData
