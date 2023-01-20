import React, { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    // define init state (via json obj)
    this.state = { counter: 0 }

    // bind `this` context to functions
    // this.increment = this.increment.bind(this)
    // this.reset = this.reset.bind(this)
  }

  componentDidMount() {
    this.timerId = setInterval(this.increment, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  reset = () => {
    this.setState({ counter: 0 })
  }

  render() {
    return(
      <div>
        <h1>{this.props.message} {this.state.counter}</h1>
        <Button onClick={ this.increment } color="primary">INCR</Button>
        <Button onClick={ this.reset }>RESET</Button>
      </div>
    )
  }
}

export default App;
