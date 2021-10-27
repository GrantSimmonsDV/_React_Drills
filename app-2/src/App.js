import React, { useState } from "react";
import "./App.css";

function App() {
  //Variables
  const [arr, setArr] = useState(["Hank", "Bank", "Drank", "Stank"]);
  // Function
  // setArr(){
  //   let arr = arr;
  //   let List = "";

  //   List = arr.toString()
  //   // for (let i = 0; i<arr.length; i++){
  //   //   List += arr[i];
  //   }

  let display = arr.map((element, index) => {
    return <h2 key={index}>{element}</h2>;
  });
  //Return
  return (
    <div className="App">
    
        <ul>{display}</ul>
 
    </div>
  );
}

export default App;
