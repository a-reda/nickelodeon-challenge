import React, { Component } from 'react';

import Program from './Program'



class ProgramsList extends Component {

  render() {
    return (
      <div>
        {this.props.programs.map((p, i) => (
          <Program key={i} program={p}/>
        ))}
      </div>
    );
  }

}

export default ProgramsList;
