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

const linkStyles = 'link dim green f4 f5-m f4-l dib mr3'
// function to determine if link is active or deeper routes
const isPartiallyActive = ({ isPartiallyCurrent, location, href }) => {
  // debugger;
  return (isPartiallyCurrent && href !== '/') ||
    (href === '/' && location.pathname === '/')
    ? { className: `${linkStyles} b` }
    : null
}

// const isActive = ({ isCurrent }) => {
//   return isCurrent ? { className: `${linkStyles} b` } : null
// }

const NavRoutes = ({ activeRoute }) => {
  return (
    <nav className="pb3 sans-serif">
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
      <div className="dim gray f4 f5-m f4-l dib ml3 fr">Will Simons</div>
      <a
        className="dim gray f4 f5-m f4-l dib ml3 fr"
        style={{
          height: '1.3rem',
        }}
        href={'https://github.com/bigredwill'}
      >
        <img
          alt="Github Icon and Link"
          style={{
            height: '100%',
          }}
          src={githubIcon}
        />
      </a>
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
