import React from 'react'
import Link from 'gatsby-link'

import  HeaderStyled  from "../styled-components/Header/Header-styled"
import  "../styled-components/theme/BlogTheme"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1>
          <Link to={'/'} style={{color: 'black', textDecoration: 'none'}}>
            Starter Gatsby Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'} style={{color: 'black', textDecoration: 'none'}}>
            Starter Gatsby Blog
          </Link>
        </h3>
      )
    }
    return (
      <div style={{backgroundColor:"white"}}>
        <HeaderStyled>
        {header}
        </HeaderStyled>
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
