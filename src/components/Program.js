import React, { Component } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

class Program extends Component {

  constructor(props) {
    super(props)
    this.state = {showDescription: false}
  }

  render() {
    const p = this.props.program
    return (
      <div className="Program">
        <div className="Programinfo">
          <div className="Thumbnail"><img src={p.images ? p.images['r16-9'] : 'http://nickjr-intl.mtvnimages.com/nickjr/nickjr-web/fallbacks/missing_image_nick_jr.jpg?' }/></div>
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

  // Change the class of the time title for Onnow and Upnext cases
  getFormattedTime = (p) => {
    const className = p._onnow ? 'Onnow': p._upnext  ? 'Upnext' : 'Timetitle';
    return (<h3 className={className}>{p.formattedTime}</h3>)
  }

  // Remove duplicate title in description
  formatDescription = (p) => {
    return p.description.replace(/'.*'\s+-\s+/, '')
  }

}

export default Program;
