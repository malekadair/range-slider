import React, { Component } from 'react'

class TableRow extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		this.props.addCumulativeTotal(parseInt(this.props.marketReturn.totalReturn))

		return (
			<tr key={this.props.index}>
				<td>{this.props.marketReturn.year}</td>
				<td>{this.props.marketReturn.totalReturn}</td>
				<td>{this.props.cumulativeTotal}</td>
			</tr>
		)
	}
}

export default TableRow