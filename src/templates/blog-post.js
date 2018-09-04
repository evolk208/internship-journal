import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { PostWrapper, LArrow, RArrow, MobileMenu } from "../styled-components/Post/Post-styled"
import { PageBackground } from "../styled-components/ArticleBox/ArticleBox-styled"

import Bio from '../components/Bio.js'

import { HomeIcon } from '../styled-components/img/favicon-1.png'
import Larrow from '../styled-components/img/arrow-left.png'
import Rarrow from '../styled-components/img/arrow-right.png'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
      <PageBackground></PageBackground>
        {/*Helmet*/}
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        
        {/*Post body*/}
        <PostWrapper>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        </PostWrapper>
      {/*Bio*/}
        {/* <Bio /> */}

      {/*Next and previous buttons*/}
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <LArrow src={Larrow} />  
                {/* {previous && previous.frontmatter.title} */}
            </Link>
           
          )}
          {next && (
              <Link to={next.fields.slug} rel="next">
                <RArrow src={Rarrow} />
                {/* {next && next.frontmatter.title}  */}
              </Link>
             
          )}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
