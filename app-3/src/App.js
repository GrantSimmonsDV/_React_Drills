import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [list, setList] = useState(["cheese", "milk", "bread", "cereal", "yogurt"]);


const groceries = list.map((element, index) => {
  return <h2 key={index} >{element}</h2>;
});

  return (
    <div className="App">
     <input type="text" 
     onChange = {(e) => setList(e.target.value)} />
     
    </div>
  );
}

export default App;
