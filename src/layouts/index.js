import React from 'react'
import Link from 'gatsby-link'

import  HeaderStyled  from "../styled-components/Header/Header-styled"
import  "../styled-components/theme/BlogTheme"

import HomeIcon from '../styled-components/Icon/Icon-styled'
import Icon from '../styled-components/img/favicon-1.png'
import styles from './style.module.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} >
            <HomeIcon src={Icon} className={styles.animationOne}/>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'} >
            <HomeIcon src={Icon} className={styles.animationSpin}/>
          </Link>
        </h3>
      )
    }
    return (
      <div style={{backgroundColor:"white"}}>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
