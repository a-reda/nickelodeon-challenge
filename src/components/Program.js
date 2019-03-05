import React, { Component } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

class Program extends Component {

  constructor(props) {
    super(props)
    this.state = {showDescription: false}
  }

  render() {
    const p = this.props.program
    console.log(p)
    return (
      <div className="Program">
        <div className="Programinfo">
          <div className="Thumbnail"><img src={p.images['r16-9']}/></div>
          <div className="Programtime">{this.getFormattedTime(p)}</div>
          <div className="Programtitle"><h3>{p.seriesTitle}</h3></div>
          <div className="Episodetitle"><h3>{p.episodeTitle}</h3></div>
          <div className="Toggleiconcontainer">{this.getToggleIcon()}</div>
        </div>
        <div className={this.state.showDescription ? "Programdescr" : "ProgramdescrHidden"}>
            <p className="Descrepisodetitle">{p.episodeTitle}</p>
            <p>{p.description ? this.formatDescription(p): 'No description available'}</p>
        </div>
      </div>
    );
  }

  toggleDescription = () => this.setState({showDescription: !this.state.showDescription})

  getToggleIcon = () =>
        this.state.showDescription ?
          <FaAngleDown className="Toggleicon" onClick={this.toggleDescription}/>
        : <FaAngleUp className="Toggleicon" onClick={this.toggleDescription}/>


  getFormattedTime = (p) => {
    const className = p._onnow ? 'Onnow': p._upnext  ? 'Upnext' : 'Timetitle';
    return (<h3 className={className}>{p.formattedTime}</h3>)
  }

  formatDescription = (p) => {
    return p.description.replace(/'.*'\s+-\s+/, '')
  }

}

export default Program;
