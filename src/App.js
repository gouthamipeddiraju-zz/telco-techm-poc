import "./App.css";
import { useEffect, useState } from "react";

const Progressbar = () => {};

const App = () => {
  const [data, setData] = useState({ isLoading: true, content: {} });
  useEffect(() => {}, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Progress Bars Demo</h1>
        {data?.isLoading ? (
          <p>loading, please wait...</p>
        ) : (
          <Progressbar data={data.content} />
        )}
      </header>
    </div>
  );
};

export default App;
