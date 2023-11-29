import { useState } from "react";
import { Button } from "react-bootstrap";
import TillFredag from "./pages/TillFredag";
import TodoList from "./components/TodoList/TodoList";
import TicTac from "./pages/TicTac";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { URLOptions } from "./types/MainTypes";
import About from "./pages/About";
import Home from "./pages/Home";
import TodoListTest from "./pages/TodoListTest";
import TodoTwo from "./pages/TodoTwo";
import FetchAPIB from "./pages/FetchAPIB";
import P1Pokemon from "./pages/P1Pokemon";
import RUser from "./pages/subpages/RUser";
import RUserList from "./pages/subpages/RUserList";
import StreakCounter from "./pages/StreakCounter";
import SetTheCount from "./pages/RouterUsers";
import RouterUsers from "./pages/RouterUsers";
interface Props {}
const App: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about">
            <Route index element={<About />} />
            <Route path=":number" element={<About />} />
            <Route path=":string" element={<About />} />
          </Route>
          <Route path="TillFredag" element={<TillFredag />} />
          <Route path="TodoListTest" element={<TodoListTest />} />
          <Route path="TodoTwo" element={<TodoTwo />} />
          <Route path="FetchAPIB" element={<FetchAPIB />} />
          <Route path="P1Pokemon" element={<P1Pokemon />} />
          <Route path="TicTac" element={<TicTac />} />

          <Route
            path="/RedirectTodoListTest"
            element={<Navigate to="TodoListTest" />}
          ></Route>
          <Route path="RouterUsers" element={<RouterUsers />}>
            <Route path="user" element={<RUser />} />
            <Route path="userlist" element={<RUserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
