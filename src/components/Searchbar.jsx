import React, { Component } from "react";
import './Searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="topsearch">
        <input className='Searchbar ' type="text" placeholder='Search for Movie Title...' />
        {/* <button className='bg-cyan-400 p-2'>Search</button> */}
      </div>
    );
  }
}

export default Searchbar;














// // import React from 'react'
// import './Searchbar.css'

// import React, { Component } from "react";

// class Searchbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
    
//          <div className="topsearch">


      
// <input className='Searchbar' type="text" placeholder='Serch for Movei Title...' />
// {/* <button className='bg-cyan-400 p-2  ' >Search</button> */}
//       </div>
//     );
//   }
// }

// export default Searchbar;