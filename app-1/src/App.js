import React, { useState } from "react";
import "./App.css";

function App(props) {
  //Variables
  const [userInput, setUserInput] = useState("");
  //Functions

  //Return
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(e) => setUserInput(e.target.value)} />
        <h1>{userInput}</h1>
      </header>
    </div>
  );
}

// }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <input
//           type="text"
//           // value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//         />
//         <h1>{userInput}</h1>
//       </header>
//     </div>
//   );
// }

export default App;

//******CLASS COMPONENT********* */

// import React, { Component } from 'react'
// import logo from "./logo.svg";
// import "./App.css";

// export default class App extends Component {
// //Variables
// constructor() {
//   super();
//   this.state = {
//     userInput: "",
//   }
// }
// //Functions

// //Return
//   render() {
//     return (
//       <div>
//          <input
//           type="text"
//           value={this.state.userInput}
//           onChange={(event) => this.setUserInput(event.target.value)}
//         />
//         <span></span>
//       </div>
//     )
//   }
// }
