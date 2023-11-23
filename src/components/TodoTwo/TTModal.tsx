import React from "react";
import { Button, Modal } from "react-bootstrap";
import { TTodo } from "../../types/TodoTypes";
import { useState } from "react";
type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  setTodo: React.Dispatch<React.SetStateAction<TTodo | undefined>>;
  todo?: TTodo | undefined;
};

const TTModal: React.FC<Props> = ({ handleClose, show, setTodo, todo }) => {
  const [editedTodo, setEditedTodo] = useState<TTodo>({ ...todo });
  //Modal control
  const handleTodoEdit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(editedTodo);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <form className="TT-input-form">
            <input
              name="date"
              type="date"
              className="xjexsbox"
              defaultValue={todo?.date}
            />
            <input name="task" type="text" defaultValue={todo?.task} />

            <button onClick={handleTodoEdit}>Save changes</button>
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
