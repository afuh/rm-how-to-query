import React, { Component } from 'react'

import { Form } from './apollo'
import Layout from '../components/layout'

class REST extends Component {
  state = {
    data: null,
    name: ''
  }

  componentDidMount() {
    this.handleChange()
  }

  handleChange = async event => {
    const name = event ? event.target.value : "Rick"
    this.setState({ name })

    const { data } = await this.handleQuery(name)

    this.setState({ data })
  }
  async handleQuery(name){
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

    return res.json()
  }

  render(){
    const { data, name } = this.state

    return (
      <Layout>
        <p>fetch API using GraphQL with a POST request</p>
        <Form
          value={name}
          onChange={this.handleChange}
        />
        <div>
          {data && data.characters &&
            data.characters.results.map(char => (
              <div key={char.id}>
                <img width={60} src={char.image} alt={char.name}/>
                {char.name}
              </div>
            ))}
        </div>
      </Layout>
    )
  }
}

export default REST
