import React from "react";
import { useState, useEffect } from "react";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { Todo } from "../../types/TodoTypes";

interface Props {
  x: Todo;
  show: boolean;
  handleShow: () => void;
  handleClose: () => void;
}

const TodoModal: React.FC<Props> = ({ x, handleClose, show }) => {
  const { title } = x;

  return (
    <>
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};

export default TodoModal;
