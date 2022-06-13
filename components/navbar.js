import React from "react";
import Link from "next/link";

const routes = [
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Writing",
    href: "/blog",
  },
  {
    title: "Now",
    href: "/now",
  },
];

const linkStyles = "link dim nav-blue f5 f4-m f4-l dib mr2 v-btm";
// function to determine if link is active or deeper routes
const isPartiallyActive = ({ isPartiallyCurrent, location, href }) => {
  // don't highlight top level route for every page
  return (isPartiallyCurrent && href !== "/") ||
    (href === "/" && location.pathname === "/")
    ? true
    : null;
};

const Navbar = ({ route = "/" }) => (
  <nav className="measure-wide center pt4 sans-serif flex">
    <div className="tracked mid-gray dib f5 f4-m f4-l v-btm mr2 mb2-s">
      Will Simons
    </div>
    <div>
      {routes.map((obj) => {
        return (
          <Link
            active={isPartiallyActive}
            className={linkStyles}
            href={obj.href}
            key={obj.title}
          >
            <span
              style={{
                color: "#3f51b5",
                textAlign: "center",
                margin: '0 4px',
                fontSize: '1.25rem'
              }}
            >
              {obj.title}
            </span>
          </Link>
        );
      })}
    </div>
  </nav>
);

export default Navbar;
