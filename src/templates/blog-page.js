import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import PostListItem from '../components/PostListItem'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { html, frontmatter } = data.markdownRemark
    const { edges: posts } = data.allMarkdownRemark
    const title = frontmatter.title || 'Writing'
    return (
      <Layout>
        <Helmet title={`Will Simons | ${title}`} />
        <HTMLContent className="lh-copy measure" content={html} />
        {posts.map(({ node: post }) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
