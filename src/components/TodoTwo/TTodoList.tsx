import React, { useEffect } from "react";
import { TTodo } from "../../types/TodoTypes";
import { Container, Button } from "react-bootstrap";

import TTodoCard from "./TTodoCard";

type Props = {
  todos: TTodo[];
  setTodo: React.Dispatch<React.SetStateAction<TTodo | undefined>>;
  setTodos: (value: React.SetStateAction<TTodo[]>) => void;
  todo: TTodo | undefined;
};

const TTodoList: React.FC<Props> = ({ todos, setTodo, setTodos, todo }) => {
  return (
    <>
      <h1>Todos:</h1>
      <div style={{ display: "flex" }}>
        <h3>Unfinished Todos:</h3>
        <section className="w-50">
          {todos.map(
            (x, i) =>
              !x.completed && (
                <div>
                  <TTodoCard
                    key={`uc-${x.id}`}
                    uniqueID={x.id}
                    todo={x}
                    {...{ todos, setTodo, setTodos }}
                  />
                </div>
              )
          )}
        </section>
        <section className="w-50">
          <h3>Finished Todos:</h3>
          {todos.map(
            (x, i) =>
              x.completed && (
                <div>
                  <TTodoCard
                    key={`c-${x.id}`}
                    uniqueID={x.id}
                    todo={x}
                    {...{ todos, setTodo, setTodos }}
                  />
                </div>
              )
          )}
        </section>
      </div>
    </>
  );
};

export default TTodoList;
