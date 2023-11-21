import React, { useEffect, useState } from "react";
import { Todo } from "../../types/TodoTypes";
import { Card } from "react-bootstrap";
import TodoModal from "./TodoModal";

import TodoCard from "./TodoCard";

type Props = {
  todos1: Todo[];
  todos2: Todo[];
};

const TodoGroup: React.FC<Props> = ({ todos1, todos2 }) => {
  const [show, setShow] = useState(false);
  const [todo, setTodo] = useState<Todo>();
  const handleClose = () => {
    setShow(false);
    setUpdatedTodos([...updatedTodos]);
  };
  const handleShow = () => setShow(true);
  const [updatedTodos, setUpdatedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setUpdatedTodos([...todos1]);
  }, [todos1]);

  let pluto: number = 0;
  //gör modal till egen component. rendera sedan här
  return (
    <>
      <section>
        {updatedTodos.map(
          (x: Todo) =>
            !x.completed && (
              <>
                <Card className="todo-card" onClick={handleShow}>
                  <TodoCard cardInfo={x} />
                  {!x.completed && <button>Complete</button>}
                </Card>
              </>
            )
        )}
      </section>
      {/* <section>
        {todos2.map((x: Todo) => (
          <TodoCard cardInfo={x} />
        ))}
      </section> */}
      <section className="todo-finished-list">
        {updatedTodos.map(
          (x: Todo) =>
            x.completed && (
              <>
                <TodoModal {...{ x, handleClose, show, handleShow }} />
                <Card className="todo-card" onClick={handleShow}>
                  <TodoCard cardInfo={x} />
                </Card>
              </>
            )
        )}
      </section>
    </>
  );
};

export default TodoGroup;
