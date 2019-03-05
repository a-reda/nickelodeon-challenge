import React, { Component } from 'react';
import { FaSortAlphaDown } from 'react-icons/fa';
import './App.css';

import ProgramsList from './components/ProgramsList'

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      schedule: {},
      sorted: false,
      selectedChannel: 0,
      searchText: ''
    }

  }

  getSchedule() {

    const URI = window.location.pathname === '/2' ? '/api/schedule2' : '/api/schedule'

    fetch(URI)
        .then(response => response.json())
        .then(schedule => this.setState({schedule: schedule}))
        .catch((err) => console.log(err)); // May be better error handling
  }

  componentDidMount () {
    this.getSchedule()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Schedule</h1>
          <h3>{this.state.schedule.description}</h3>
          <FaSortAlphaDown onClick={this.toggleSort}/>
          <p>{this.state.sorted}</p>
          <input type="text" onChange={this.handleTextChange}/>
        </header>
        <div className="Tabs">
            {
              this.getChannels().length > 1 ?
              this.getChannels().map((channel, i) => (
                <div className={this.getTabClass(i)} onClick={() => this.onSelectTab(i)}>
                  {channel.title || "Nick Jr"}
                </div>
              )) : null
            }
        </div>
        <div>
            <ProgramsList programs={this.getPrograms()} sorted={this.state.sorted} search={this.state.searchText} />
        </div>
      </div>
    );
  }

  onSelectTab = (select) => {
    this.setState({selectedChannel: select})
    console.log(this.state.schedule)
  }

  handleTextChange = (e) => this.setState({searchText: e.target.value})

  toggleSort = () => this.setState({sorted: !this.state.sorted})

  getTabClass = (name) => this.state.selectedChannel === name ? "Tab-selected" : "Tab"

  getPrograms = () => this.state.schedule.channels ? this.state.schedule.channels[this.state.selectedChannel].schedule : []
  getChannels = () => this.state.schedule.channels ? this.state.schedule.channels : []


}

export default App;
