import { useState } from "react";

const Buttons = ({ data, updateProgressBars }) => {
  const [selectedProgressBar, setProgressBar] = useState(0);
  const { bars, buttons } = data;
  return (
    <div className="buttons">
      <select onChange={(e) => setProgressBar(e.currentTarget.value)}>
        {bars.length &&
          bars.map((bar, i) => {
            return (
              <option key={i} value={i}>
                #progress {i + 1}
              </option>
            );
          })}
      </select>
      {buttons.length &&
        buttons.map((button, i) => {
          return (
            <button
              key={i}
              type="button"
              onClick={() => updateProgressBars(selectedProgressBar, button)}
            >
              {button}
            </button>
          );
        })}
    </div>
  );
};

export default Buttons;
