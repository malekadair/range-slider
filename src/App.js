import React, { Component } from 'react'
import './App.css';
import marketReturns from './assets/returns.json'
import Table from './components/Table';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketReturns: marketReturns,
      min: "",
      max: "",
      selectedRange: [],
    }
  };

  componentDidMount() {
    marketReturns.reverse()
    this.setRange()
  }

  setRange = () => {
    // sets min and max range for slider based on data
    let minRange
    let maxRange
    // map through market return data to find the min and max years of the range
    this.state.marketReturns.map((marketReturn, index) => {
      // establishes minRange and maxRange to the first marketReturn 
      if (index == 0) {
        minRange = marketReturn.year
        maxRange = marketReturn.year
      }
      if (marketReturn.year < minRange) {
        minRange = marketReturn.year
      }
      if (marketReturn.year > maxRange) {
        maxRange = marketReturn.year
      }
      return
    })
    // sets min and max range values to state
    this.setState({
      min: minRange,
      max: maxRange,
      selectedRange: [minRange, maxRange]
    })
  }

  handleRangeChange = (values) => {
    // sets selectedRange in state based on changing range values
    this.setState({
      selectedRange: values
    })
  };

  render() {

    //destructuring state variables
    const {
      marketReturns,
      min,
      max,
      selectedRange,
    } = this.state

    return (
      <div className="appContainer">
        <h4 className="rangeText">Use the Slider below to select the range of years displayed in the table.</h4>
        <Range
          min={min}
          max={max}
          onChange={this.handleRangeChange}
          defaultValue={[min, max]}
          value={[selectedRange[0], selectedRange[1]]}
          allowCross='false'
          className='rangeSlider'
        />
        <Table
          marketReturns={marketReturns}
          selectedRange={selectedRange}
        />
      </div >
    )
  }
}

export default App;
