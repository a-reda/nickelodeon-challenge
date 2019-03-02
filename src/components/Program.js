import React, { Component } from 'react';

class Program extends Component {



  render() {
    const p = this.props.program
    console.log(p)
    return (
      <div className="Program">
        <div className="ProgramInfo">
            <img src={p.images['r16-9']} height={40}/>
            <h3>{p.seriesTitle}</h3>
            <h4> - {p.formattedTime}</h4>
        </div>
        <div className="ProgramDescr">
          {p.description}
        </div>
      </div>
    );

  }


}

export default Program;
