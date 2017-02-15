import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChangeUnits from './components/change-units';
import InputBodyInfo from './components/input-body-info';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeUnits = this.changeUnits.bind(this);

    this.state = { units: 'US'};
  }

  changeUnits() {
    const units = (this.state.units === 'US' ? 'Metric' : 'US');
    this.setState({ units });
  }

  render() {
    return (
      <div>
        <ChangeUnits onClick={this.changeUnits} />
        <InputBodyInfo units={this.state.units} />
      </div>
    );
  }
}

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
