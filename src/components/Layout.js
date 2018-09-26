import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Will Simons"
      meta={[
        {
          name: 'description',
          content:
            'Will Simons is adventurous, a fullstack web engineer, emphatic, and driven to create, amongst other things.',
        },
        { name: 'keywords', content: 'Javascript' },
      ]}
    >
      <link rel="shortcut icon" href="/favicon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Will Simons" />
    </Helmet>

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <Navbar />
      {children}
    </div>
  </div>
)

export default TemplateWrapper
