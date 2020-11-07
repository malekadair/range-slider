import React, { Component } from 'react'
import './App.css';
import marketReturns from './assets/returns.json'
import Table from './components/Table';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marketReturns: marketReturns
    }
  };
  render() {
    console.log("returns: ", this.state.marketReturns)
    let displayedMarketReturns = this.state.marketReturns
    return (
      <div>
        <Table marketReturns={displayedMarketReturns} />
      </div>
    )
  }
}

export default App;
