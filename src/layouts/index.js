import React from 'react'
import Link from 'gatsby-link'
import Bio from '../components/Bio'

import { HeaderStyled, TitleBanner, HomeIcon }  from "../styled-components/Header/Header-styled"
import Footer from "../styled-components/Footer/Footer-styled"

import  "../styled-components/theme/BlogTheme"

// import Icon from '../styled-components/img/favicon-1.png'
import styles from './style.module.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <HeaderStyled>
        <h1>
          <Link to={'/'} >
            <HomeIcon alt="Home button" src='/img/favicon-1.png' className={styles.animationOne}/>
          </Link>
        </h1>
        <TitleBanner className="title">
        Emily Volk's 2018 Esri summer internship journal, recording her experience as an Esri intern
        </TitleBanner>
        </HeaderStyled>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'} >
            <HomeIcon alt="Home button" src='/img/favicon-1.png' className={styles.animationSpin}/>
          </Link>
        </h3>
      )
    }
    return (
      <div style={{backgroundColor:"white"}}>
        {header}
        {children()}
        <Footer style={{paddingTop: "10px"}}>
          <Bio/>
        </Footer>
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
