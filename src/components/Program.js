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
            <div className="Leftinfo">
              <div className="Thumbnail"><img src={p.images['r16-9']}/></div>
              <div className="Programtext">
                  {this.getFormattedTime(p)}
                  <h3 className="Programtitle">{p.seriesTitle}</h3>
                  <h3 className="Episodetitle">{p.episodeTitle}</h3>
              </div>
            </div>
            <div className="Toggleiconcontainer">{this.getToggleIcon()}</div>
        </div>
        {this.state.showDescription ?
          <div className="Programdescr">
            <p>{p.episodeTitle}</p>
            <p>{p.description}</p>
          </div>
          : ''}
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
    return (<div className='Timerow'>
              <h3 className={className}>{p.formattedTime}</h3>
            </div>)
  }

}

export default Program;
