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
  // Assumes programs are already sorted chronologically
  filterPrograms = (list) => {

      // Filter out past programs
     let future = _.filter(list, (p) => new Date() <= new Date(p.airTime))

     // workaround to show past day schedule ( used in the 2 channel schedule)
     if(future.length == 0)
          future = list

     // Find the on now program
     const idx = list.indexOf(future[0]) - 1
     if ( idx > 0 )
       future.unshift(list[idx]);
     // Add flag for Onnow and/or Upnext for Program component use
     if (future.length >= 1)
         future[0]._onnow = true
         if (future.length >= 2) future[1]._upnext = true

     // If a search is wanted
     if(this.props.search.length > 0)
        future = _.filter(future, (p) => p.seriesTitle.toLowerCase().search(this.props.search.toLowerCase()) !== -1)

      // Return a sorted list if props sorted
      if(this.props.sorted)
        future = _.sortBy(future, ['seriesTitle'])

      return future
  }

}

export default ProgramsList;
