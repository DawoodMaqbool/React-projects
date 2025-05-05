import { useState } from 'react'
// import './App.css';

function App() {

  const [color, setColor] = useState("olive")

  return (

    <>
    <h1 style={{backgroundColor: color, width: '300px', height: '400px'}}>Hello World</h1>

    <div>
    <button onClick= {() => setColor("red")}> Red button</button>
    <button onClick= {() => setColor("green")}> Green button</button>
    <button onClick= {() => setColor("blue")}> Blue button</button>

    </div>
    </>
  );
}

export default App;
