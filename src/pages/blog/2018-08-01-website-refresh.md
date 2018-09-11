---
templateKey: blog-post
title: Website Refresh
date: 2018-09-01T15:04:10.000Z
excerpt: Netlify CMS literally made my dreams come true.
tags:
  - jamstack
  - gatsby
  - react
  - update
  - life
---
## A new website for new things and why I built a new site, again.

* [Gatsby](https://www.gatsbyjs.org/) static site generator.
* [Netlify](https://www.netlify.com/) continuous integration and hosting.
* [NetlifyCMS](https://www.netlifycms.org/) as the CMS.
* [Tachyons](http://tachyons.io/) css toolkit. Atomic css ftw.

The code for this site lives at <https://github.com/bigredwill/wsimons.com>

- - -

### The Stack

Github Pages and Jekyll served me well for many years. Yet, I dreamt (literally dreamt) of a serverless CMS solution that utilized a git repository as a database. I even began experimenting with an implementation myself. Little did I know that this would soon be reality.

During my travels I brainstormed about the next iteration of my personal site would be.  I wanted a CMS system, but didn't want to manage a server. I liked writing with markdown, and liked the component-based approach to UI of React. Enter the [JAM Stack](https://jamstack.org/).

[Gatsby](https://www.gatsbyjs.org/), with React as the 'templating' system, allows me to quickly iterate upon the site. I went from zero to what you see now in a few afternoons. 

[Netlify](https://www.netlify.com/) acts a CDN and allows me to deploy development branches and to production at the push of a git commit.  

[NetlifyCMS](https://www.netlifycms.org/) literally made my dreams come true! It makes editing pages easy from anywhere you have access to a computer. The configuration is simple and the UI is great. The ability to use your git repo as a CMS database was something I dreamed (literally dreamed) about a year ago.  It has a few bugs as it's still under active development, but the major functionality is there.

I chose [Tachyons](http://tachyons.io/) because it's dead simple. I like that I can use as much or as little as I want.  Bonus points because of the low specificity of selectors, dead simple typography, and intuitive class names. The documentation is pretty great too.
