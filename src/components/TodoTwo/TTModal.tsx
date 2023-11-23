import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { TTodo } from "../../types/TodoTypes";
import { useState } from "react";
type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  setTodo: React.Dispatch<React.SetStateAction<TTodo>>;
  todo?: TTodo | undefined;
  setTodos: (value: React.SetStateAction<TTodo[]>) => void;
  todos: TTodo[];
};

const TTModal: React.FC<Props> = ({
  handleClose,
  show,
  setTodo,
  todo,
  setTodos,
  todos,
  setShow,
}) => {
  const [editedTodo, setEditedTodo] = useState<TTodo>({ ...todo });
  //Modal control
  const todoEditAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos(
      todos.map((x, i) => {
        if (x.id === editedTodo.id) {
          console.log("perfect");
          return { ...editedTodo };
        } else {
          return x;
        }
      })
    );
    setShow(false);
  };
  const handleEditChange = (
    e: React.ChangeEvent,
    targetProperty: keyof TTodo
  ) => {
    const { value } = e.target as HTMLInputElement;
    setEditedTodo({ ...editedTodo, [targetProperty]: value });
  };
  useEffect(() => {
    console.log(editedTodo);
  }, [editedTodo]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <form className="" onSubmit={todoEditAdd}>
            <input
              name="date"
              type="date"
              className="TT-todo-date-input"
              defaultValue={todo?.date}
              onChange={(e) => {
                handleEditChange(e, "date");
              }}
            />
            <input
              name="task"
              type="text"
              className="TT-todo-task-input"
              defaultValue={todo?.task}
              onChange={(e) => {
                handleEditChange(e, "task");
              }}
            />

            <button type="submit">Save changes</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TTModal;
