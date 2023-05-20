import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Landing from "./pages/Landing";
import Loading from "./ui/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
