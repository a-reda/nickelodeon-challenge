import React, { Component } from 'react';
import './App.css';


import ProgramsList from './components/ProgramsList'

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      schedule: {},
      selectedChannel: 'nickjr'
    }

  }

  getSchedule() {
    console.log("getting")
    fetch('/api/schedule')
        .then(response => response.json())
        .then(schedule => this.setState({schedule: schedule}))
  }

  componentDidMount () {
    this.getSchedule()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Schedule</h1>
          <h3>What's on today: {Date.now()}</h3>
        </header>
        <div className="Tabs">
            <div className={this.getTabClass("nickjr")} onClick={() => this.onSelectTab("nickjr")}>
              tv1
            </div>
            <div className={this.getTabClass("tv2")}  onClick={() => this.onSelectTab("tv2")}>
              tv2
            </div>
        </div>
        <div>
            <ProgramsList programs={this.getPrograms()} />
            <p></p>
        </div>
      </div>
    );
  }

  onSelectTab = (select) => {
    this.setState({selectedChannel: select})
    console.log(this.state.schedule)
  }

  getTabClass = (name) => this.state.selectedChannel === name ? "Tab-selected" : "Tab"


  getPrograms = () => {
    return this.state.schedule.channels ? this.state.schedule.channels[0].schedule : []
  }

}

export default App;
