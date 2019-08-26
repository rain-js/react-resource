import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Card extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default () => {
  return (
    <Card>
      <div>
        Card Component
      </div>
    </Card>
  )
}