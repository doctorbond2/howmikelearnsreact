import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { TTodo } from "../../types/TodoTypes";
import TTodoList from "./TTodoList";
import TTInputField from "./TTInputField";

type Props = {
  todo: TTodo;
};
const defaultTodo: TTodo = {
  task: "Springa",
  date: "some date",
  completed: true,
};
const TodoTwoMain: React.FC<Props> = ({}) => {
  const [todo, setTodo] = useState<TTodo>();
  const [todos, setTodos] = useState<TTodo[]>([]);

  const handleTodoAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    if (todo?.date && todo.task) {
      setTodos([...todos, todo]);
    } else {
      alert("Insert all values!");
    }
    console.log(target);
  };

  useEffect(() => {
    console.log(todos);
  }, [todo]);

  useEffect(() => {
    setTodo((prev) => ({ ...prev, completed: false }));
  }, [todos]);
  return (
    <>
      <TTInputField {...{ handleTodoAdd, setTodo, todo }} />
      <TTodoList {...{ todos, setTodo, setTodos, todo }} />
    </>
  );
};

export default TodoTwoMain;
//{...{ handleChange, todo, setTodo }}
