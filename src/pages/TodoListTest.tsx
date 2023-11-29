import React, { ChangeEvent } from "react";
import BasicTodoMain from "../components/TodoList/BasicTodoMain";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Button,
  FormSelect,
  Image,
  Dropdown,
} from "react-bootstrap";
import Select from "react-select";
import NavigationBar from "../components/NavigationBar";
type Props = {};

const TodoListTest: React.FC<Props> = ({}) => {
  return (
    <>
      <BasicTodoMain />
    </>
  );
};

export default TodoListTest;
