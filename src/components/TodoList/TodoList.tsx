import React, { useEffect } from "react";
import { Todo } from "../../types/TodoTypes";
import { useState } from "react";
import TodoGroup from "./TodoGroup";

type Props = {
  todoData: Todo[];
};
type TodoItem = Todo;
const TodoList: React.FC<Props> = ({ todoData }) => {
  const [todos1, setTodos1] = useState<Todo[]>([]);
  const [todos2, setTodos2] = useState<Todo[]>([]);
  useEffect(() => {
    todoData.forEach((todo: TodoItem, index) => {
      if (index < 4) {
        todo.userId === 1 && setTodos1((prev) => [...prev, todo]);
        todo.userId === 2 && setTodos2((prev) => [...prev, todo]);
      }
    });
  }, []);

  return (
    <>
      <TodoGroup {...{ todos1, todos2 }} />
    </>
  );
};

export default TodoList;
