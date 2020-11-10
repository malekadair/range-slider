import React, { Component } from 'react'
import './App.css';
import marketReturns from './assets/returns.json'
import Table from './components/Table';
import Slider, { Range } from 'rc-slider';
// import Tooltip from 'rc-tooltip'
import 'rc-slider/assets/index.css';



//todos:
//[X] build table structure
//[X] order data in ascending order
//[X] import and set up slider w/ range
//[X] filter range values onChange
//[X] acumulate totals for the cumulative column
//[ ] fix off by one bug
//[ ] add tooltip

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketReturns: marketReturns,
      displayedMarketReturns: marketReturns,
      min: "",
      max: "",
      selectedRange: [],
    }

  };

  componentWillMount() {
    marketReturns.reverse()
    this.setRange()
  }

  setRange = () => {
    // sets min and max range for slider based on data
    let minRange
    let maxRange
    // map through market return data to find the min and max years of the range
    this.state.marketReturns.map(marketReturn => {
      if (!minRange) {
        minRange = marketReturn.year
      }
      if (!maxRange) {
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
  filterReturns = () => {
    const { selectedRange, marketReturns } = this.state
    const filteredReturns = marketReturns.filter(marketReturn => {
      if (marketReturn.year >= selectedRange[0] && marketReturn.year <= selectedRange[1]) {
        return true
      }
      return false
    })
    this.setState({
      displayedMarketReturns: filteredReturns
    })

  }

  handleRangeChange = (values) => {
    // console.log('values: ', values)
    this.setState({
      selectedRange: values
    })
    // this.filterReturns()
  };



  render() {
    // const Slider = require('rc-slider');
    // const createSliderWithTooltip = Slider.createSliderWithTooltip;
    // const Range = createSliderWithTooltip(Slider.Range);

    //destructuring state variables
    const {
      marketReturns,
      min,
      max,
      selectedRange,
      displayedMarketReturns
    } = this.state

    // console.log(displayedMarketReturns)
    console.log('second results: ', displayedMarketReturns)

    return (
      <div className="appContainer">
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
      </div>
    )
  }
}

export default App;
