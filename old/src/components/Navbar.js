import React from 'react'
import { Link } from 'gatsby'

const routes = [
  {
    title: 'About Me',
    href: '/',
  },
  {
    title: 'Writing',
    href: '/blog',
  },
  {
    title: 'Now',
    href: '/now',
  },
]

const linkStyles = 'link dim nav-blue f5 f4-m f4-l dib mr2 v-btm'
// function to determine if link is active or deeper routes
const isPartiallyActive = ({ isPartiallyCurrent, location, href }) => {
  // don't highlight top level route for every page
  return (isPartiallyCurrent && href !== '/') ||
    (href === '/' && location.pathname === '/')
    ? { className: `${linkStyles} b ul` }
    : null
}

const Navbar = ({ route = '/' }) => (
  <nav className="measure-wide center pt4 sans-serif flex">
    <div className="tracked mid-gray dib f5 f4-m f4-l v-btm mr2 mb2-s">
      Will Simons
    </div>
    <div style={{
      display: grid,
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10,
    }}>
      {routes.map(obj => {
        return (
          <Link
            getProps={isPartiallyActive}
            className={linkStyles}
            to={obj.href}
            title={obj.title}
            key={obj.title}
          >
            {obj.title}
          </Link>
        )
      })}
    </div>
  </nav>
)

export default Navbar
