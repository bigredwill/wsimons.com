import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from '../components/Helmet'
import Layout from '../components/Layout'
import PostListItem from '../components/PostListItem'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <article key={post.node.fields.slug}>
        <li className="ph0 dib">
          <PostListItem post={post.node} />
        </li>
      </article>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with #${tag}`
    const slug = this.props.pageContext.tagPath

    return (
      <Layout>
        <section className="measure-wide center lh-copy">
          <Helmet
            title={`${title} • ${tag}`}
            description={`Will Simons is writing about ${tag}`}
            slug={slug}
          />
          <article className="list f6 ph0 mt3 mb0">
            <h1 className="f3">{tagHeader}</h1>
            <ul className="taglist ph0">{postLinks}</ul>
            <Link to="/tags/">Browse all tags</Link>
          </article>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
