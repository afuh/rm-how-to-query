import React, { Component } from 'react'

import Layout from '../components/layout'

class REST extends Component {
  state = {
    data: ''
  }

  async componentDidMount(){
    const res = await fetch('https://rickandmortyapi.com/api/character/1')
    const data = await res.json()

    this.setState({ data })
  }

  render(){
    const { data } = this.state
    return (
      <Layout>
        <p>REST with fetch API</p>
        {data &&
          <div>
            <img src={data.image} alt={data.name}/>
            <h3>{data.name}</h3>
          </div>
        }
      </Layout>
    )
  }
}

export default REST
