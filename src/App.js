import React, { Component } from 'react'
import './App.css';
import marketReturns from './assets/returns.json'
import Table from './components/Table';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
//todos:
//[X] build table structure
//[ ] order data in ascending order
//[ ] import and set up slider w/ range
//[ ] filter range values onChange
//[ ] 
//[ ]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marketReturns: marketReturns,
      min: "",
      max: "",
      selectedRange: []
    }
  };
  componentWillMount() {
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
      max: maxRange
    })
  }

  handleRangeChange = values => {
    console.log(values)
    this.setState({
      selectedRange: values
    })
    // this.setState({})
    // const { name, value, type, checked } = event.target;
    // type === "checkbox"
    //   ? this.setState({ [name]: checked })
    //   : this.setState({ [name]: value });
    // this.props.onPriceInputChange(name, value)
  };

  render() {
    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    console.log("returns: ", this.state.marketReturns)
    let displayedMarketReturns = this.state.marketReturns
    return (
      <div>
        <Range
          min={this.state.min}
          max={this.state.max}
          defaultValue={[this.state.min, this.state.max]}
          // value={[this.state.selectedRange[1], this.state.selectedRange[0]]}
          onAfterChange={(values, event) => this.handleRangeChange(values, event)}
        />
        <Table marketReturns={displayedMarketReturns} />
      </div>
    )
  }
}

export default App;
