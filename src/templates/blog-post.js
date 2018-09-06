import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  excerpt,
  tags,
  title,
  date,
}) => {
  const PostContent = contentComponent || Content
  return (
    <article className="cf ph3 ph0-l pv5">
      <header className="fn fl-l w-50-l pr4-l">
        <h1 class="mb3 mt0 lh-title">{title}</h1>
        <time class="f6 ttu tracked gray">{date}</time>
        {tags && tags.length ? (
          <div>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>
      <div class="fn fl-l w-50-l">
        <PostContent className="lh-copy measure" content={content} />
      </div>
    </article>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  excerpt: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | Blog`} />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        excerpt={post.frontmatter.excerpt}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        tags
      }
    }
  }
`
