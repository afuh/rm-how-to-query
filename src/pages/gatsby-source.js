import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <StaticQuery
    query={GET_RICKS}
    render={({ rmApi }) => (
      <Layout>
        <p>Server fetch, this thing runs at build time. Check <code>gatsby-config.js</code></p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        }}>
          {rmApi.characters.results &&
            rmApi.characters.results.map(char => (
              <figure key={char.id}>
                <img src={char.image} alt={char.name}/>
                <figcaption>
                  {char.name}<br/>
                </figcaption>
              </figure>
            ))}
        </div>
      </Layout>
    )}
  />
)

export default IndexPage

const GET_RICKS = graphql`{
  rmApi {
    characters(filter: {
      name: "Rick"
      status: "dead"
    }) {
      results {
        name
        image
      }
    }
  }
}
`
