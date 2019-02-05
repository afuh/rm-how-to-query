import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta } }) => (
      <>
        <Header siteTitle={meta.title} />
        <main style={{ margin: '0 auto', maxWidth: 600 }}>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const query = graphql`
  query SiteTitleQuery {
    site {
      meta: siteMetadata {
        title
      }
    }
  }
`
