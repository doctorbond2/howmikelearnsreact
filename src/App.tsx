import TillFredag from "./pages/Mainpages/TillFredag";
import TicTac from "./pages/Mainpages/TicTac";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/Mainpages/About";
import Home from "./pages/Mainpages/Home";
import TodoListTest from "./pages/Mainpages/TodoListTest";
import TodoTwo from "./pages/Mainpages/TodoTwo";
import FetchAPIB from "./pages/Mainpages/FetchAPIB";
import P1Pokemon from "./pages/Mainpages/P1Pokemon";
import RouterUsers from "./pages/Mainpages/RouterUsers";
import FredagsRoutes from "./pages/Mainpages/FredagsRoutes";
import ParamsPractice from "./pages/Mainpages/ParamsPractice";
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
          />
          <Route path="RouterUsers/*" element={<RouterUsers />} />
          <Route path="FredagsRoutes/*" element={<FredagsRoutes />} />
          <Route path="ParamsPractice/*" element={<ParamsPractice />} />
          <Route
            path="/*"
            element={<h1 style={{ textAlign: "center" }}>Page not found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
