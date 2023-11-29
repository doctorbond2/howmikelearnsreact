import React from "react";
import TodoTwoMain from "../components/TodoTwo/TodoTwoMain";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

interface Props {}

const TodoTwo: React.FC<Props> = ({}) => {
  return (
    <>
      <TodoTwoMain />
    </>
  );
};

export default TodoTwo;
