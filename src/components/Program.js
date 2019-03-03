import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa';

class Program extends Component {


  render() {
    const p = this.props.program
    console.log(p)
    return (
      <div className="Program">
        <div className="ProgramInfo">
            <div className="LeftInfo">
              <div className="Thumbnail"><img src={p.images['r16-9']}/></div>
              <div className="Timetitle">
                  <h3>{p.formattedTime}</h3>
                  <h3>{p.seriesTitle}</h3>
              </div>
            </div>
            <div className="Toggleiconcontainer"><FaAngleDown className="Toggleicon" /></div>
        </div>
        <div className="ProgramDescr">
          <p>{p.episodeTitle}</p>
          <p>{p.description}</p>
        </div>
      </div>
    );
  }

}

export default Program;
