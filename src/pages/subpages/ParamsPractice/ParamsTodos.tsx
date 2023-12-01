import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Todo } from "../../../types/TodoTypes";
type Props = {};

const ParamsTodos: React.FC<Props> = ({}) => {
  const params = useParams();
  const location = useLocation();
  const [fetchedTodo, setFetchedTodo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + params.id
      );
      const json = await response.json();
      setFetchedTodo(json);
    };
    fetchData();
  }, []);
  const { id, userId, title, completed } = fetchedTodo;

  return (
    <>
      State stuff:
      {location.state ? (
        <div>
          STATESTUFF<br></br>
          <h3>{location.state?.title}</h3>
          <h4>{location.state?.userId}</h4>
        </div>
      ) : (
        fetchedTodo && (
          <div>
            FETCHSTUFF: <br></br>
            <h3>{title}</h3>
          </div>
        )
      )}
    </>
  );
};

export default ParamsTodos;
