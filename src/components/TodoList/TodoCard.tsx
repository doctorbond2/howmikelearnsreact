import React from "react";
import { Todo } from "../../types/TodoTypes";
import { useState, useEffect } from "react";
import TodoModal from "./TodoModal";
import {
  Card,
  CardHeader,
  Modal,
  ModalBody,
  CardBody,
  Button,
} from "react-bootstrap";

type Props = {
  cardInfo: Todo;
};

const TodoCard: React.FC<Props> = ({ cardInfo }) => {
  const { title, id, userId, completed } = cardInfo;
  return (
    <>
      <CardBody>
        <h5>Book Title: {title}</h5>
        <p>{completed ? "Finished!" : "In progress"}</p>
        {!completed && <button>Complete</button>}
      </CardBody>
    </>
  );
};

export default TodoCard;
