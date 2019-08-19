import React, { Component } from 'react'

// Simple Components
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return (
    <tbody>{rows}</tbody>
  )
}

// Class Components
class Table extends Component {
  render () {
    const { tableData } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody tableData={tableData}/>
      </table>
    )
  }
}

export default Table