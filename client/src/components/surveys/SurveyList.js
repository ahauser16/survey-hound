import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import styles from './SurveyList.module.css'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className={styles.cardColContainer}>
          <ul className={styles.cardContainer}>
            <li className={styles.surveyCard} key={survey._id}>
              <p className={styles.cardTitle}>Title: {survey.title}</p>
              <p className={styles.surveySentTimestamp}>
              <p className={styles.surveyMsgBody}>Message: {survey.body}</p>
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              <div className={styles.cardContent}>
                <div className={styles.surveyResults}>
                  <p>Recipient chose:</p>
                  <a>
                    <span className={styles.yesTxt}>Yes:</span>
                    <span className={styles.yesResults}>{survey.yes}</span>
                  </a>
                  <a>
                    <span className={styles.noTxt}>No:</span>
                    <span className={styles.noResults}>{survey.no}</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderSurveys()}</div>
  }
}

function mapStateToProps({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
