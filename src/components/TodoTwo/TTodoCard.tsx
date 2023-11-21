import React, { useEffect } from "react";
import { TTodo } from "../../types/TodoTypes";
import { Card, CardBody, Container, Button } from "react-bootstrap";

type Props = {
  todo: TTodo;
  setTodo: React.Dispatch<React.SetStateAction<TTodo | undefined>>;
  todos: TTodo[];
  setTodos: (value: React.SetStateAction<TTodo[]>) => void;
  uniqueID: number | undefined;
};

const TTodoCard: React.FC<Props> = ({
  todo,
  setTodo,
  todos,
  setTodos,
  uniqueID,
}) => {
  const { task, completed, date } = todo;
  const handleClick = () => {
    setTodo({ ...todo, completed: !todo?.completed });
    const updatedTodos = todos.map((x, i) => {
      if (x.task === todo.task) {
        return {
          ...x,
          completed: !completed,
        };
      } else {
        return x;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Container>
        <Card className="w-75">
          <CardBody>
            <h3> {task} </h3>
            <h4> Due-date: {date} </h4>
            <h5>Status: {completed ? "Done!" : "In progress"}</h5>
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
