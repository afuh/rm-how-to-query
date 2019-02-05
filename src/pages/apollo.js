import React, { Component } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Layout from '../components/layout'

export const Form = ({ value, onChange }) => (
  <form style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid lightgray' }}>
    <label htmlFor='name'>
      Name
      <input
        type='text'
        id='name'
        name='name'
        placeholder='name'
        required
        value={value}
        onChange={onChange}
      />
    </label>
  </form>
)

const GET_RICKS = gql`
  query($name: String){
    characters(filter: {
      name: $name
    }){
      results {
        id
        name
        image
      }
    }
  }
`

class App extends Component {
  state = {
    name: 'Morty'
  }
  handleChange = e => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }
  render() {
    return (
      <Layout>
        <p>
          This runs at run time using Apollo.
          Check <code>gatsby-browser.js</code> and <code>gatsby-ssr.js</code>
        </p>
        <Form
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Query
          query={GET_RICKS}
          variables={{ name: this.state.name }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>
            if (!data.characters.results) return <p>nop</p>

            return (
              <div>
                {data.characters.results &&
                data.characters.results.map(char => (
                  <div key={char.id}>
                    <img width={60} src={char.image} alt={char.name}/>
                    {char.name}
                  </div>
                ))}
              </div>
            )
          }}
        </Query>
      </Layout>
    )
  }
}

export default App
