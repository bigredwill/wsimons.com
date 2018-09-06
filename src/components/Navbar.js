import React from 'react'
import { Link } from 'gatsby'
import githubIcon from '../img/github-icon.svg'

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

const linkStyles = 'link dim green f5 f4-m f4-l dib mr3'
// function to determine if link is active or deeper routes
const isPartiallyActive = ({ isPartiallyCurrent, location, href }) => {
  // debugger;
  return (isPartiallyCurrent && href !== '/') ||
    (href === '/' && location.pathname === '/')
    ? { className: `${linkStyles} b ul` }
    : null
}

// const isActive = ({ isCurrent }) => {
//   return isCurrent ? { className: `${linkStyles} b` } : null
// }

const NavRoutes = ({ activeRoute }) => {
  return (
    <nav className="dt w-100 pb3 pt3 sans-serif">
      <div className="dtc v-mid"/>
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
      <div className="dim gray f5 f4-m f4-l dtc v-mid tr">Will Simons</div>
    </nav>
  )
}

const Navbar = ({ name, tagline, route = '/' }) => (
  <div>
    <h1 className="f1 inline green">{name}</h1>
    <p className="sans-serif">{tagline}</p>
    <NavRoutes activeRoute={route} />
  </div>
)

export default Navbar
