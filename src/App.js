import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Landing from "./pages/Landing";
import Loading from "./ui/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"
import Blog from "./pages/Blog";
import Todo from "./pages/Todo";
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
            <Route exatch  path="/home" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/todo" element={<Todo/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
