import React, { Component } from 'react'

class TableRow extends Component {
	constructor(props) {
		super(props)
		// this.cumulativeTotal = props.cumulativeTotal
		this.state = {

		}
	}

	render() {
		const { marketReturn } = this.props
		return (
			<tr key={this.props.index}>
				<td>{marketReturn.year}</td>
				<td style={marketReturn.totalReturn < 0 ? { color: 'red' } : {}}>{marketReturn.totalReturn}</td>
				<td>{this.props.cumulativeTotal}</td>
			</tr>
		)
	}
}

export default TableRow