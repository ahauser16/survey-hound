import React from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({ auth }) {
  return (
    <nav>
      <ul>
        <li className={styles.dropdown}>
          <h2>
            <NavLink
              to={{ auth } ? '/campaigns' : '/'}
              aria-label="Link to Campaigns."
              style={{ textDecoration: 'none' }}
              // style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              Campaigns
              <FontAwesomeIcon
                icon={faCaretDown}
                aria-hidden={true}
              ></FontAwesomeIcon>
            </NavLink>
          </h2>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink
                  to={{ auth } ? '/campaigns' : '/WhereWoof'}
                  aria-label="Link to WhereWoof."
                  style={{ textDecoration: 'none' }}
                >
                  WhereWoof
                </NavLink>
              </h3>
            </li>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink
                  to={{ auth } ? '/campaigns' : '/Timbr'}
                  aria-label="Link to Timbr."
                  style={{ textDecoration: 'none' }}
                >
                  Timbr
                </NavLink>
              </h3>
            </li>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink
                  to={{ auth } ? '/campaigns' : '/MTGrouper'}
                  aria-label="Link to MTGrouper."
                  style={{ textDecoration: 'none' }}
                >
                  MTGrouper
                </NavLink>
              </h3>
            </li>
          </ul>
        </li>

        <li className={styles.dropdown}>
          <h2>
            <NavLink
              to={{ auth } ? '/contacts' : '/'}
              style={{ textDecoration: 'none' }}
            >
              Contacts{' '}
              <FontAwesomeIcon
                icon={faCaretDown}
                aria-hidden={true}
              ></FontAwesomeIcon>
            </NavLink>
          </h2>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/contacts' : '/DogParents'}>
                  Dog Parents
                </NavLink>
              </h3>
            </li>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/contacts' : '/Musicians'}>
                  Musicians
                </NavLink>
              </h3>
            </li>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/contacts' : '/BocceBall'}>
                  Bocce Ball Players
                </NavLink>
              </h3>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <h2>
            <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/Analysis' : '/'}>
              Analysis{' '}
              <FontAwesomeIcon
                icon={faCaretDown}
                aria-hidden={true}
              ></FontAwesomeIcon>
            </NavLink>
          </h2>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/Analysis' : '/CampaignData'}>
                  Campaign Data
                </NavLink>
              </h3>
            </li>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/Analysis' : '/SurveyData'}>
                  Survey Data
                </NavLink>
              </h3>
            </li>
            <li className={styles.dropdownMenuItem}>
              <h3>
                <NavLink style={{textDecoration: 'none'}} to={{ auth } ? '/Analysis' : '/QuestionData'}>
                  Question Data
                </NavLink>
              </h3>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
