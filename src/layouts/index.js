import React from 'react'
import Link from 'gatsby-link'

import  HeaderStyled  from "../styled-components/Header/Header-styled"
import  "../styled-components/theme/BlogTheme"
import HomeIcon from '../styled-components/img/favicon-1.png'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} >
            <img src={HomeIcon} style={{width: "75px", height: "75px", padding: "15px"}}/>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'} >
            <img src={HomeIcon} style={{width: "75px", height: "75px", padding: "15px"}}/>
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
