import React, { useEffect, useState } from "react";
import { TTodo } from "../../types/TodoTypes";
import { Container, Button } from "react-bootstrap";
import TTModal from "./TTModal";

import TTodoCard from "./TTodoCard";

type Props = {
  todos: TTodo[] | undefined;
  setTodo: React.Dispatch<React.SetStateAction<TTodo>>;
  setTodos: (value: React.SetStateAction<TTodo[]>) => void;
  todo?: TTodo | undefined;
  activeEdit: boolean;
  setActiveEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const TTodoList: React.FC<Props> = ({
  todos,
  setTodo,
  setTodos,
  activeEdit,
  setActiveEdit,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  false;
  return (
    <>
      {/* <TTModal /> */}
      <h1>Todos:</h1>
      <div style={{ display: "flex" }}>
        <section className="w-50">
          <h3>Unfinished Todos:</h3>
          {todos?.map(
            (x, i) =>
              !x.completed && (
                <ul>
                  <TTodoCard
                    key={`uc-${i}`}
                    uniqueID={`uc-${i}`}
                    todo={x}
                    {...{ todos, setTodo, setTodos, handleShow }}
                  />

                  <TTModal
                    todo={x}
                    {...{
                      handleClose,
                      show,
                      setShow,
                      setTodo,
                      activeEdit,
                      setActiveEdit,
                      setTodos,
                      todos,
                    }}
                  />
                </ul>
              )
          )}
        </section>

        <section className="w-50">
          <h3>Finished Todos:</h3>
          {todos?.map(
            (x, i) =>
              x.completed && (
                <ul>
                  <TTodoCard
                    key={`c-${i}`}
                    uniqueID={`c-${i}`}
                    todo={x}
                    {...{ todos, setTodo, setTodos, handleShow }}
                  />
                  <TTModal
                    todo={x}
                    {...{
                      handleClose,
                      show,
                      setShow,
                      setTodo,
                      activeEdit,
                      setActiveEdit,
                      todos,
                      setTodos,
                    }}
                  />
                </ul>
              )
          )}
        </section>
      </div>
    </>
  );
};

export default TTodoList;
