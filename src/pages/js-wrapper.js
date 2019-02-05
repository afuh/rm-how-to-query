import React, { Component } from 'react'
import { getCharacter } from 'rickmortyapi'

import Layout from '../components/layout'

class REST extends Component {
  state = {
    data: ''
  }

  async componentDidMount(){
    const data = await getCharacter(1)
    this.setState({ data })
  }

  render(){
    const { data } = this.state
    return (
      <Layout>
        <p>REST with the a JS Wrapper</p>
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
