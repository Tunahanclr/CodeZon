import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Loading from "./ui/Loading"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
