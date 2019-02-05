import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const gansoLink = [
  { to: '/gatsby-source', message: 'GraphQL - gatsby-source-graphql (at build time)' },
  { to: '/apollo', message: 'GraphQL - Apollo' },
  { to: '/fetch-graphql-post', message: 'GraphQL - fetch /POST' },
  { to: '/fetch-graphql-get', message: 'GraphQL - fetch /GET' },
  { to: '/fetch-rest', message: 'REST - fetch' },
  { to: '/js-wrapper', message: 'REST - JS wrapper' }
]

const IndexPage = () => (
  <Layout>
    <ul>
      {gansoLink.map(link => (
        <li key={link.to}>
          <Link to={link.to}>{link.message}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
