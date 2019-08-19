import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render () {
    const tableData = [
      {
        name: 'rain',
        job: 'web developer'
      },
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspiring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]

    return (
      <div className="container">
        <Table tableData={tableData}/>
      </div>
    )
  }
}

export default App