import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from '../components/Helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <article className="lh-copy measure-wide center">
      <PageContent className="content" content={content} />
    </article>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet
        title={post.frontmatter.title}
        slug={post.fields.slug}
        description={post.frontmatter.excerpt}
        thumbnail={post.frontmatter.thumbnail}
      />
      <AboutPageTemplate contentComponent={HTMLContent} content={post.html} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        excerpt
        thumbnail
      }
    }
  }
`
