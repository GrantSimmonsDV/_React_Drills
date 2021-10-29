import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    "cheese",
    "milk",
    "bread",
    "cereal",
    "yogurt",
  ]);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {list
        .filter((element) => {
          if (list == "") {
            return element;
          } else if (element.toLowerCase().includes(search.toLowerCase())) {
            return element;
          }
        })
        .map((element, index) => {
          return <h2 key={index} >{element}</h2>;
        })}

    </div>
  );
}

export default App;
