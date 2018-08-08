import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'

import MainContainer from "../styled-components/Container/Container-styled"
import { ArticleBox, BoxContent, ArticleBoxBackground } from "../styled-components/ArticleBox/ArticleBox-styled"


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
          <Link to={node.fields.slug}
                style={{textDecoration: 'none'}}>
          <ArticleBoxBackground postTitle={node.frontmatter.title}>
          <ArticleBox key={node.id} postTitle={node.frontmatter.title}>
            <BoxContent>
              <h1 className="title">{node.frontmatter.title}</h1>
              {/* <p className="author">{node.frontmatter.author}</p> */}
              <p className="date">{node.frontmatter.date}</p> 
              {/* excerpt would go here  */}
            </BoxContent>
          </ArticleBox>
          </ArticleBoxBackground>
          </Link>
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
