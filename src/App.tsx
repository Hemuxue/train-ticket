import React, { Component, createContext } from 'react';

const BatteryContext = createContext(60);
const OnlineContext = createContext(false);

class Middel extends React.Component {
  render() {
    return (
      <Leaf />
    )
  }
}

class Leaf extends React.Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context;
    console.log(battery);
    return (
      <h1>battery: {battery}</h1>
    )
  }
}


interface AppState {
  battery: number,
}

class App extends React.Component {

  state: AppState = {
    battery: 60,
  }

  render() {
    const { battery } = this.state;
    return (
      <div className="App">
        <BatteryContext.Provider value={battery}>
          <button type="button" onClick={() => this.setState({ battery: battery - 1 })}>clie me</button>
          <Middel />
        </BatteryContext.Provider>
      </div>
    )
  }

}


export default App;
