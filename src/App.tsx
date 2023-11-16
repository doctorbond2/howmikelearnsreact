import { useState } from "react";
import { Button } from "react-bootstrap";
import TillFredag from "./pages/TillFredag";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about">
            <Route index element={<About />} />
            <Route path=":number" element={<About />} />
            <Route path=":string" element={<About />} />
          </Route>
          <Route path="/TillFredag" element={<TillFredag />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
