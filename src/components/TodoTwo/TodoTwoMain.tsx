import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { TTodo } from "../../types/TodoTypes";
import TTodoList from "./TTodoList";
import TTInputField from "./TTInputField";

type Props = {};
const defaultTodo: TTodo = {
  task: "Göra en todolist",
  date: "2022-12-23",
  completed: true,
  id: 0,
};
const TodoTwoMain: React.FC<Props> = ({}) => {
  const [todo, setTodo] = useState<TTodo>(defaultTodo);
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [activeEdit, setActiveEdit] = useState<boolean>(false);

  const handleTodoAdd = (e: React.FormEvent) => {
    const rN = Math.floor(Math.random() * 10000);
    console.log(rN);
    e.preventDefault();

    if (todo?.date && todo.task) {
      setTodos([...todos, { ...todo, id: rN }]);
    } else {
      alert("Insert all values!");
    }
    (e.currentTarget as HTMLFormElement).reset();
    setTodo({ completed: false });
  };
  useEffect(() => {
    console.log("Active todo", todo);
    console.log("Todos:", todos);
  }, [todo]);

  useEffect(() => {
    setTodo((prev) => ({ ...prev, completed: false }));
  }, [todos]);
  return (
    <>
      <TTInputField {...{ handleTodoAdd, setTodo, todo }} />
      <TTodoList
        {...{ todos, setTodo, setTodos, activeEdit, setActiveEdit, todo }}
      />
    </>
  );
};

export default TodoTwoMain;
//{...{ handleChange, todo, setTodo }}
