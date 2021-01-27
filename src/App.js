import "./App.css";
import { useEffect, useState } from "react";
import Progressbar from "./components/Progressbar";

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Progress Bars Demo</h1>
        {data?.isLoading ? (
          <p>loading, please wait...</p>
        ) : data?.error ? (
          <p> Something went wrong.</p>
        ) : (
          <Progressbar data={data.content} />
        )}
      </header>
    </div>
  );
};

export default App;
