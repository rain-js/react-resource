import React, { Component } from 'react'

const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

class Info extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  render () {
    const { data } = this.state
    let rows = data.map((item, idx) => {
      return (
        <li key={idx}>{item}</li>
      )
    })  
    return (
      <ul>
        {rows}
      </ul>
    )
  }
}

export default Info