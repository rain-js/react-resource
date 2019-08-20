import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.initState = {
      name: '',
      job: ''
    }
    this.state = this.initState
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  submitForm = () => {
    const { name, job } = this.state
    if (name && job) {
      this.props.submitForm(this.state)
      this.setState(this.initState)
    } else {
      alert('Name & Job is required !')
    }
  }
  render () {
    const { name, job } = this.state
    return (
      <form>
        <div>Add New</div>
        <label>
          Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Job: <input type="text" name="job" value={job} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.submitForm}>Submit</button>
      </form>
    )
  }
}

export default Form