import React, {Component} from 'react';
import Component1 from './functional/component1';
import Container1 from './container/container1';

class App extends Component {
  state = {
    counter : 0
  }

  increment = () => (
    this.setState({counter:  5})
  )

  render() {

    return (
      <div className="App">
        React
        <Container1 nickname="Sheed" />
        <Component1 name="Rashid" age={42}/>
      </div>
    )
  }
}


export default App;
