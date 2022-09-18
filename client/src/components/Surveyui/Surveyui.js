import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Surveyui.module.css'



const Surveyui = () => {
    return (
        <div className={styles.uiContainer}>
          <div>
            <Link to="/surveys/new" className={styles.btnLink}>
              <button className={styles.btn}>Add Survey</button>
            </Link>
            <Link className={styles.btnLink}>
              <button className={styles.btn}>Copy Survey</button>
            </Link>
            <Link className={styles.btnLink}>
              <button className={styles.btn}>Delete Survey</button>
            </Link>
          </div>
        </div>
    )
  }
  
  export default Surveyui
  