import React from 'react'
import styles from './Navbar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className={styles.dropdown}>
          <h2>
            <a href="#" className={styles.active}>
              Campaigns{' '}
              <FontAwesomeIcon
                icon={faCaretDown}
                aria-hidden={true}
              ></FontAwesomeIcon>
            </a>
          </h2>
          <ul className={styles.dropdownMenu}>
            <li href="#">
              <h3>
                <a href="#">WhereWoof</a>
              </h3>
            </li>
            <li href="#">
              <h3>
                <a href="#">Timbr</a>
              </h3>
            </li>
            <li href="#">
              <h3>
                <a href="#">MTGrouper</a>
              </h3>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <h2>
            <a href="#" className={styles.active}>
              Contacts{' '}
              <FontAwesomeIcon
                icon={faCaretDown}
                aria-hidden={true}
              ></FontAwesomeIcon>
            </a>
          </h2>
          <ul className={styles.dropdownMenu}>
            <li href="#">
              <h3>
                <a href="#">Dog Parents</a>
              </h3>
            </li>
            <li href="#">
              <h3>
                <a href="#">Musicians</a>
              </h3>
            </li>
            <li href="#">
              <h3>
                <a href="#">Nerds</a>
              </h3>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <h2>
            <a href="#" className={styles.active}>
              Analysis{' '}
              <FontAwesomeIcon
                icon={faCaretDown}
                aria-hidden={true}
              ></FontAwesomeIcon>
            </a>
          </h2>
          <ul className={styles.dropdownMenu}>
            <li href="#">
              <h3>
                <a href="#">Campaign Data</a>
              </h3>
            </li>
            <li href="#">
              <h3>
                <a href="#">Survey Data</a>
              </h3>
            </li>
            <li href="#">
              <h3>
                <a href="#">Question Data</a>
              </h3>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
