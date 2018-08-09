import React from 'react'
import Link from 'gatsby-link'

import  "../styled-components/theme/BlogTheme"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    
    return (
      <div style={{backgroundColor:"blue"}}>
        <h1>Hi</h1>
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
