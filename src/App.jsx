import { useState } from "react";

import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  const [state, setState] = useState([
    { label: "fast", value: false },
    { label: "good", value: false },
    { label: "cheap", value: false },
  ]);

  const handleChange = (label) => {
    const newState = state.map((s) => {
      return s.label !== label ? s : { ...s, value: !s.value };
    });

    // Tricky joke
    // If all 3
    if (newState.every((s) => s.value)) {
      const randomPick = () => {
        const i = Math.floor(Math.random() * newState.length);
        // If it's another one, set it to false
        if (newState[i].label !== label) {
          newState[i].value = false;
          return newState;
        }
        // or retry
        return randomPick();
      };
      randomPick();
    }
    // console.log(newState);
    setState(newState);
  };

  return (
    <div className="app">
      {state.map((s) => {
        return (
          <Checkbox
            key={s.label}
            label={s.label}
            checked={s.value}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}

export default App;
