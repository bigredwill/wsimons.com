import React from 'react'
import ReactHelmet from 'react-helmet'

const Helmet = ({
  title = '',
  slug = '',
  description = '',
  thumbnail = '',
}) => {
  const _title = `Will Simons • ${title}`
  return (
    <ReactHelmet title={_title}>
      <link rel="canonical" href={`https://wsimons.com${slug}`} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`https://wsimons.com${slug}`} />
      <meta property="og:site_name" content="Will Simons" />
      <meta property="article:publisher" content="https://wsimons.com" />
      <meta property="og:image" content={`https://wsimons.com${thumbnail}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:site" content="@der_gib" />
      <meta name="twitter:image" content={`https://wsimons.com${thumbnail}`} />
      <meta name="twitter:creator" content="@der_gib" />
    </ReactHelmet>
  )
}

export default Helmet
