import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import {MainContainer, ArticleBox} from "../styled-components/homepage"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges') //Getting posts

    return (
      <div>
        <Helmet title={siteTitle} />

        <Bio />

      <MainContainer>
        {posts.map(({node}) => (
          <ArticleBox key={node.id}>
              <h3><Link className="title"
                      to={node.fields.slug}
                      style={{textDecoration: 'none'}}>
                      {node.frontmatter.title}
              </Link></h3>
              <p className="author">{node.frontmatter.author}</p>
              <p className="date">{node.frontmatter.date}</p>
              <p className="excerpt">{node.excerpt}</p>
          </ArticleBox>
        ))}
      </MainContainer>
    </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`
