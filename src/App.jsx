import { useState } from "react";

import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  const [state, setState] = useState({
    fast: false,
    good: false,
    cheap: false,
  });

  const handleChange = (key) => {
    const newState = { ...state, [key]: !state[key] };

    // tricky one
    // si tout est true
    if (Object.values(newState).every((el) => el)) {
      // select other keys
      const otherKeys = Object.keys(newState).filter((k) => k !== key);
      // console.log(otherKeys);
      // randomly set one to false
      const random = Math.floor(Math.random() * otherKeys.length);
      newState[otherKeys[random]] = false;
    }
    // console.log(newState);
    setState(newState);
  };

  return (
    <div className="app">
      {Object.keys(state).map((s) => {
        return (
          <Checkbox
            key={s}
            label={s}
            checked={state[s]}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}

export default App;
