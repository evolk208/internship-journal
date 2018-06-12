import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1 style={{textAlign: 'center', backgroundColor: 'grey', width: '100%', padding: '40px'}}>
          <Link to={'/'} style={{color: 'black'}}>
            Starter Gatsby Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 style={{textAlign: 'left', backgroundColor: 'grey', width: '100%', padding: '20px', color: 'black'}}>
          <Link to={'/'} style={{color: 'black'}}>
            Starter Gatsby Blog
          </Link>
        </h3>
      )
    }
    return (
      <div >
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
