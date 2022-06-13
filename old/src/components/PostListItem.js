import React from 'react'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

const ProjectItem = ({ post }) => (
  <article className="cf pv3 db" key={post.fields.slug}>
    <time className="f6 mb0 ttu tracked gray">{post.frontmatter.date}</time>
    <Link to={`${post.fields.slug}`}>
      <h3 className="red f4 lh-title mv1">{post.frontmatter.title}</h3>
    </Link>
    <p className="lh-copy mv0">{post.frontmatter.excerpt}</p>
    <ul className="list f6 ph0 mt1 mb0 mw6">
      {post.frontmatter.tags.map(tag => (
        <li className="mr2 dib" key={tag}>
          <Link className="link lh-title" to={`/tags/${kebabCase(tag)}/`}>
            <span className="fw7">#{tag}</span>
          </Link>
        </li>
      ))}
    </ul>
  </article>
)

export default ProjectItem
