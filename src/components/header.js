import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header style={{ background: '#5e5e5e', marginBottom: 50 }}>
    <h1 style={{ margin: 0, color: '#000', textAlign: 'center', padding: '20px 0' }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

export default Header
