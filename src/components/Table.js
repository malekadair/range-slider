import React, { Component } from 'react'
import TableRow from './TableRow';

class Table extends Component {
	constructor(props) {
		super(props)
		this.cumulativeTotal = 0
		this.state = {
			// cumulativeTotal: 0
		}
	}
	// addCumulativeTotal = (annualReturn) => {
	// 	this.setState(prevState => {
	// 		return {
	// 			cumulativeTotal: prevState.cumulativeTotal + annualReturn
	// 		}
	// 	})
	// }

	render() {
		this.cumulativeTotal = 0

		return (
			<div className="returnsTable" >
				<header>
					<h3>Currently Displaying {this.props.selectedRange[0]} Through {this.props.selectedRange[1]}</h3>
					<h4>S&P 500 Total Returns by Year</h4>
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

							// console.log('initial CT: ', this.state.cumulativeTotal)
							this.cumulativeTotal += parseFloat(marketReturn.totalReturn)
							// this.props.addCumulativeTotal(parseInt(marketReturn.totalReturn))
							// cumulativeTotal += parseInt(marketReturn.totalReturn)
							// console.log("post", this.state.cumulativeTotal)

							return (
								<TableRow
									index={index}
									marketReturn={marketReturn}
									cumulativeTotal={this.cumulativeTotal}
								// addCumulativeTotal={this.props.addCumulativeTotal}
								/>
								// <tr key={this.props.index}>
								// 	<td>{marketReturn.year}</td>
								// 	<td>{marketReturn.totalReturn}</td>
								// 	<td>{this.cumulativeTotal}</td>
								// </tr>

							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table