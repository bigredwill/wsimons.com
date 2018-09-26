import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { graphql, Link } from 'gatsby'
import Helmet from '../components/Helmet'
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
    <article className="cf pv3 ph0-l ">
      <header className="fn pr4-l center measure-wide">
        <h1 className="f1 mb3 mt0">{title}</h1>
        <time className="f6 ttu tracked gray">{date}</time>
        {tags && tags.length ? (
          <div>
            <ul className="dib-ns list pl0">
              {tags.map(tag => (
                <li className="dib mr2" key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>
      <div className="fn">
        <PostContent
          className="lh-copy measure-wide center"
          content={content}
        />
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
      <Helmet 
        title={`Will Simons • ${post.frontmatter.title}`}
        description={post.frontmatter.excerpt}
        slug={post.fields.slug}
        thumbnail={post.frontmatter.thumbnail}
      />
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
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        tags
        thumbnail
      }
    }
  }
`
