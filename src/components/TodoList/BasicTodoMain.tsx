import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { Todo } from "../../types/TodoTypes";
import axios from "axios";
import { Nav, Navbar, Container } from "react-bootstrap";

type Props = {};

const BasicTodoMain: React.FC = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const json = await response.data;
        setTodoListData(json);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Show TodoList
        </button>
        <div className="Basic basicStyle">
          {show && <TodoList todoData={todoListData} />}
        </div>
      </Container>
    </>
  );
};

export default BasicTodoMain;
