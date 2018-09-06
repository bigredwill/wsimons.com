import React from 'react'
import Link from 'gatsby-link'

const ProjectItem = ({ post }) => (
  <article className="cf pv3 db" key={post.fields.slug}>
    <time className="f6 mb0 ttu tracked gray">{post.frontmatter.date}</time>
    <Link to={`${post.fields.slug}`}>
      <h3 className="red mt0 mb1">{post.frontmatter.title}</h3>
    </Link>
    <p className="lh-copy mt0">{post.frontmatter.excerpt}</p>
  </article>
)

export default ProjectItem
