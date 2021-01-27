import { useEffect, useState } from "react";
import Progressbar from "./components/Progressbar";
import Buttons from "./components/Buttons";

import "./styles/App.css";

const FETCH_URL = "http://pb-api.herokuapp.com/bars";

const App = () => {
  const [data, setData] = useState({
    isLoading: true,
    content: {},
    error: false,
  });

  const fetchData = async () => {
    try {
      let response = await fetch(FETCH_URL);
      const result = await response.json();
      setData({ isLoading: false, content: result, error: false });
    } catch (err) {
      setData({ isLoading: false, content: {}, error: true });
    }
  };

  const updateProgressBars = (progressBarIndex, value) => {
    const { bars } = data.content;
    const newValue = bars[progressBarIndex] + value;
    bars[progressBarIndex] = newValue < 0 ? 0 : newValue;
    setData({
      isLoading: false,
      content: { ...data.content, bars: bars },
      error: false,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Progress Bars Demo</h1>
        {data?.isLoading ? (
          <p>Loading, please wait...</p>
        ) : data?.error ? (
          <p> Looks like API is down.</p>
        ) : (
          <>
            <Progressbar data={data.content} />
            <Buttons
              data={data.content}
              updateProgressBars={updateProgressBars}
            />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
