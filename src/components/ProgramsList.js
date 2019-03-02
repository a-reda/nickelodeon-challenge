import React, { Component } from 'react';



class ProgramsList extends Component {


  render() {
    return (
      <div>
        {this.props.programs.map((p, i) => (
          <p key={i}>{p.seriesTitle}</p>
        ))}
      </div>
    );

  }


}

export default ProgramsList;
