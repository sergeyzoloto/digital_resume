import { useState } from "react";
import "./App.css";

import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button onClick={() => setCount((count) => count + 1)}>
          <p>count is {count}</p>
        </Button>
      </div>
    </div>
  );
}

export default App;
