import React from 'react'
import Link from 'gatsby-link'

const ProjectItem = ({ post }) => (
  <div className="mb2 db" key={post.fields.slug}>
    <p className="mb0">{post.frontmatter.date}</p>
    <Link to={`${post.fields.slug}`}>
      <h3 className="red mt0 mb1">{post.frontmatter.title}</h3>
    </Link>
    <p className="mt0">{post.frontmatter.excerpt}</p>
  </div>
)

export default ProjectItem
