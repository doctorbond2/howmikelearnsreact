import { useState } from "react";
import { Button } from "react-bootstrap";
import TillFredag from "./pages/TillFredag";
import TodoList from "./components/TodoList/TodoList";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { URLOptions } from "./types/MainTypes";
import About from "./pages/About";
import Home from "./pages/Home";
import TodoListTest from "./pages/TodoListTest";
import TodoTwo from "./pages/TodoTwo";
import FetchAPIB from "./pages/FetchAPIB";

interface Props {}
const App: React.FC<Props> = () => {
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
          <Route path="/TodoListTest" element={<TodoListTest />}></Route>
          <Route path="/TodoTwo" element={<TodoTwo />}></Route>
          <Route path="/FetchAPIB" element={<FetchAPIB />}></Route>
          <Route
            path="/RedirectTodoListTest"
            element={<Navigate to="TodoListTest" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
