import React, { useEffect, useState } from "react";
import { TTodo } from "../../types/TodoTypes";
import { Card, CardBody, Container, Button } from "react-bootstrap";
import TTModal from "./TTModal";

type Props = {
  todo: TTodo;
  setTodo: React.Dispatch<React.SetStateAction<TTodo>>;
  todos: TTodo[];
  setTodos: (value: React.SetStateAction<TTodo[]>) => void;
  uniqueID: string;
  handleShow: () => void;
};

const TTodoCard: React.FC<Props> = ({
  todo,
  setTodo,
  todos,
  setTodos,
  uniqueID,
  handleShow,
}) => {
  const { task, completed, date, id } = todo;
  const handleClick = () => {
    // setTodo({ ...todo, completed: !todo.completed });
    setTodos(
      todos.map((x, i) => {
        if (x.id === todo.id) {
          return {
            ...x,
            completed: !x.completed,
          };
        } else {
          return x;
        }
      })
    );
  };
  const handleRemove = () => {
    console.log();
    setTodos(todos.filter((x) => x.id !== todo.id));
  };

  return (
    <>
      <Container>
        <Card className="w-75">
          <button className="x-remove-todo-button" onClick={handleRemove}>
            X
          </button>
          <CardBody>
            <h3> {task} </h3>
            <h4> Due-date: {date} </h4>
            <h5>Status: {completed ? "Done!" : "In progress"}</h5>
            <p onClick={handleShow} className="editTTodo">
              Edit todo
            </p>
          </CardBody>
          <Button className="w-25" onClick={handleClick}>
            {completed ? "Unmark" : "Finish"}
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default TTodoCard;
