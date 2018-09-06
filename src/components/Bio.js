import React from 'react'

// import linkedIn from './linkedIn-circle-grey.png'
// import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      // <p>
        // <img
        //   src={profilePic}
        //   alt={`Kyle Mathews`}
        // />
      <div>
      <p>Emily Volk is a Web Development and Data Visualization Esri Summer 2018 Intern</p>
      <p>She's now heading back to finish her senior year at CU Boulder</p>
      <p style={{paddingTop: "15px"}}>Reach out anytime at <a href="mailto:emilymvolk@gmail.com">emilymvolk@gmail.com </a>or <a href="https://www.linkedin.com/in/emily-volk-connect/"><img src='/img/linkedIn-circle-grey.png'
        style={{width: "1.2rem", opacity: "1", verticalAlign: "text-top"}}
      ></img></a></p> 
     
      </div>
        // <a href="https://twitter.com/kylemathews">
        //   You should follow him on Twitter
        // </a>
      // </p>
    )
  }
}

export default Bio
