import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    tableData: [
      {
        name: 'rain',
        job: 'web developer'
      }
    ]
  }
  remove = e => {
    const { tableData } = this.state
    const i = parseInt(e.target.dataset.key, 10)
    
    this.setState({
      tableData: tableData.filter((item, idx) => {
        return i !== idx
      })
    })
  }
  handleFormSubmit = data => {
    const { tableData } = this.state
    this.setState({
      tableData: [...tableData, data]
    })
  }
  render () {
    const { tableData } = this.state 

    return (
      <div className="container">
        <Table tableData={tableData} remove={this.remove}/>
        <Form submitForm={this.handleFormSubmit}/>
      </div>
    )
  }
}

export default App