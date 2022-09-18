import React from 'react'
import SurveyList from '../surveys/SurveyList'
import SurveyDisplay from '../SurveyDisplay/SurveyDisplay'
import Surveyui from '../Surveyui/Surveyui'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <section id={styles.mainContent}>
      <SurveyList className={styles.surveyList}/>
      <Surveyui />
      <SurveyDisplay />
    </section>
  )
}

export default Dashboard
