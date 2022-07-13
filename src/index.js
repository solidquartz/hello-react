import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>{props.children}</button>
  )
};

const Application = () => {
  const [name, setName] = useState("");

  const reset = () => {
    console.log("reset");
    return setName("");
  };

  return (
    <main>
      <input
        placeholder="Type your name"
        value={name}
        onChange={(event) => setName(event.target.value)}>
        </input>

      <Button reset={reset}>Reset</Button>
      
      {( name  && <h1>Hello {name}</h1>)}

    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
