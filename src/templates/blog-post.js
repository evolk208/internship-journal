import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'


import Bio from '../components/Bio.js'

import styled from "styled-components"
const PostWrapper = styled.div`
  font-family: 'Helvetica', sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
  margin-bottom: 1.5em;
  padding: 2em;
  background: ghostwhite;
  box-shadow: 0px 0px 8px grey;

  h1 {
    font-size: 2em;
    color: grey;
    margin-bottom: 0px;
  }
  p {
    color: black;
  }
`;
const ButtonStyled = styled.div`
  display: flex;
  background-color: ghostwhite;
  padding: 15px;
  border: 2px solid blue;
  color: blue;
  width: 20%;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
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
        <Bio />

      {/*Next and previous buttons*/}
        <ButtonStyled>
          {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
          )}
        </ButtonStyled>
        <ButtonStyled>
          {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
          )}
        </ButtonStyled>
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
