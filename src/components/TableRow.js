import React, { Component } from 'react'

class TableRow extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { marketReturn } = this.props
		return (
			<tr className="tableRow" key={this.props.index}>
				<td>{marketReturn.year}</td>
				{/* conditionally styles font color to red if value is below 0 */}
				<td style={marketReturn.totalReturn < 0 ? { color: 'red' } : {}}>{marketReturn.totalReturn}</td>
				<td style={this.props.cumulativeTotal < 0 ? { color: 'red' } : {}}>{this.props.cumulativeTotal.toFixed(2)}</td>
			</tr>
		)
	}
}

export default TableRow