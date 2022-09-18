import React from 'react'
import { connect } from 'react-redux'
import LogoLink from '../LogoLink/LogoLink'
import Navbar from '../Navbar/Navbar'
import UserLoginData from '../UserLoginData/UserLoginData'

import styles from './Header.module.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <LogoLink />
        <Navbar />
        <UserLoginData auth={this.props.auth} />
      </header>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
