import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ParamsHome from "../subpages/ParamsPractice/ParamsHome";
import ParamsTodos from "../subpages/ParamsPractice/ParamsTodos";
import { useState } from "react";
import { Todo } from "../../types/TodoTypes";
type Props = {};

const ParamsPractice: React.FC<Props> = ({}) => {
  useEffect(() => {}, []);
  const [data, setData] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      <Link to="./">Todoslist</Link>
      <Routes>
        <Route path="/" element={data && <ParamsHome {...{ data }} />} />
        <Route path="todo/:id" element={<ParamsTodos />} />
        <Route path="todo/*" element={<div>404 NOT FOUND</div>} />
      </Routes>
    </>
  );
};

export default ParamsPractice;
