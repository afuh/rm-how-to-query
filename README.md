# Different ways to query The Rick and Morty API (or any api) in Gatsby

### [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) (build time)

```js
// gatsby-config.js

plugins: [
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "RmApi",
      fieldName: "rmApi",
      url: "https://rickandmortyapi.com/graphql"
    }
  }
]
```

### [Apollo Client](https://github.com/apollographql/apollo-client)

```js
// apolloClient.js

import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  fetch
})
```

```jsx
// gatsby-ssr.js and gatsby-browser.js

import React from 'react'
import { ApolloProvider } from 'react-apollo'

import { client } from './apolloClient'

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
```

### Fetch API `/graphql`
`post` request

```js
const query = `
  {
    characters(filter: { name: "${name}" }) {
      results {
        id
        name
        image
      }
    }
  }
`

const res = await fetch(`https://rickandmortyapi.com/graphql/`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({ query })
})

const data = res.json()
```

### Fetch API `/graphql`
`get` request

```js
const query = `
  {
    characters(filter: { name: "${name}" }) {
      results {
        id
        name
        image
      }
    }
  }
`

const res = await fetch(`https://rickandmortyapi.com/graphql?query=${query}`)
const data = res.json()

```
### Fetch API `/api`

```js
const res = await fetch('https://rickandmortyapi.com/api/character/1')
const data = await res.json()
```

### [The Rick and Morty JS Wrapper](https://github.com/afuh/rick-and-morty-api-node)

```js
import { getCharacter } from 'rickmortyapi'

const data = await getCharacter(1)
```
