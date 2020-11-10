import React, { Component } from 'react'
import TableRow from './TableRow';

class Table extends Component {
	constructor(props) {
		super(props)
		this.cumulativeTotal = 0
	}

	render() {
		// sets cumulative total back to 0 with new selectedRange
		this.cumulativeTotal = 0

		return (
			<div className="returnsTable" >
				<header>
					<h3>Currently Displaying {this.props.selectedRange[0]} Through {this.props.selectedRange[1]}</h3>
					<h4>S&amp;P 500 Total Returns by Year</h4>
				</header>
				<table>
					<thead className="tableHead">
						<tr>
							<th>Year</th>
							<th>Total Return</th>
							<th>Cumulative Return</th>
						</tr>
					</thead>
					<tbody className="tableBody">
						{this.props.marketReturns.map((marketReturn, index, arr) => {
							// conditionally renders the current marketReturn if within selectedRange
							if (marketReturn.year >= this.props.selectedRange[0] &&
								marketReturn.year <= this.props.selectedRange[1]) {

								// adds the totalReturn of the current marketReturn to the cumulativeTotal
								this.cumulativeTotal += parseFloat(marketReturn.totalReturn)

								return (
									<TableRow
										index={index}
										marketReturn={marketReturn}
										cumulativeTotal={this.cumulativeTotal}
									/>
								)
							}
							return null
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table