import React, { Component } from 'react'

class Table extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return (
			<div id="product-list">
				<header>
					<strong>S&P 500 Total Returns by Year</strong>
				</header>
				<table>
					<thead>
						<tr>
							<th>Year</th>
							<th>Total Return</th>
							<th>Cumulative Return</th>
						</tr>
					</thead>
					<tbody>
						{this.props.marketReturns.map((marketReturn, index) => {
							return (
								<tr key={index}>
									<td>{marketReturn.year}</td>
									<td>{marketReturn.totalReturn}</td>
									<td>swag</td>
								</tr>
							)
						})}
						{/* {this.props.products.map(product => {
							return (
								<tr key={product.id}>
									{!this.props.columns.id || <td>{product.id}</td>}
									{!this.props.columns.name || <td>{product.name}</td>}
									{!this.props.columns.department || <td>{product.department}</td>}
									{!this.props.columns.currency || <td>{product.currency}</td>}
									{!this.props.columns.price || <td>{product.price}</td>}
								</tr>
							)
						})} */}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table