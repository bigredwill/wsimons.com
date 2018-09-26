import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from '../components/Helmet'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import PostListItem from '../components/PostListItem'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { html, frontmatter, fields: { slug } } = data.markdownRemark
    const { edges: posts } = data.allMarkdownRemark
    const title = frontmatter.title || 'Writing'
    return (
      <Layout>
        <Helmet
          title={title}
          slug={slug}
          description={frontmatter.excerpt}
          thumbnail={frontmatter.thumbnail}
        />
        <div className="measure-wide center">
          <HTMLContent className="lh-copy" content={html} />
          {posts.map(({ node: post }) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
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
      fields {
        slug
      }
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
            tags
            excerpt
            templateKey
            date(formatString: "MMMM DD, YYYY")
            thumbnail
          }
        }
      }
    }
  }
`
