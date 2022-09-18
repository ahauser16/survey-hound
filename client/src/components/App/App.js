import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import Header from '../Header/Header'
import LeftColumn from '../LeftColumn/LeftColumn'
import RightColumn from '../RightColumn/RightColumn'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Dashboard from '../Dashboard/Dashboard'
import SurveyNew from '../surveys/SurveyNew'
import styles from './App.module.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className={styles.gridContainer}>
        <BrowserRouter>
          <Header />
          <LeftColumn />

          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          
          <RightColumn />
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
