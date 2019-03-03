import React, { Component } from 'react';

import _ from 'lodash';

import Program from './Program';



class ProgramsList extends Component {

  render() {
    const programs = this.filterPrograms(this.props.programs)
    return (
      <div>
        {programs.map((p, i) => (
          <Program key={i} program={p}/>
        ))}
      </div>
    );
  }

  // Function to remove the past events
  filterPrograms = (list) => {
     const future = _.filter(list, (p) => {
       return new Date() <= new Date(p.airTime)
      })

      list.indexOf(future[0]) - 1
  }

}

export default ProgramsList;
