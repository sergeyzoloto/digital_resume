import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        <p className="text-3xl font-bold underline">count is {count}</p>
      </button>
    </div>
  );
}

export default App;
