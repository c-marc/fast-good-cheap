import { useState } from "react";

import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  const [state, setState] = useState([false, false, false]);

  const handleChange = (i) => {
    const newState = [...state];
    newState[i] = !newState[i];

    if (newState.every((el) => el)) {
      if (i === newState.length - 1) {
        newState[0] = false;
      } else {
        newState[i + 1] = false;
      }
    }
    console.log(newState);
    setState(newState);
  };

  return (
    <div className="app">
      <Checkbox
        label="Fast"
        index={0}
        value={state[0]}
        handleChange={handleChange}
      />
      <Checkbox
        label="Good"
        index={1}
        value={state[1]}
        handleChange={handleChange}
      />
      <Checkbox
        label="Cheap"
        index={2}
        value={state[2]}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
