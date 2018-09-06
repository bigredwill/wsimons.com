import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <article>
      <Helmet title={`Tags | ${title}`} />
      <div>
        <h1 className="f3 v-mid mr3">Tags</h1>
      </div>
      <ul className="list f6 ph0 mt3 mb0 mw6">
        {group.map(tag => (
          <li className="ph2 dib" key={tag.fieldValue}>
            <Link className="link lh-title" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <span className="fw7">#{tag.fieldValue}</span>
              <span className="db black-60 no-underline">{tag.totalCount} {tag.totalCount > 1 ? "posts" : "post"}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
