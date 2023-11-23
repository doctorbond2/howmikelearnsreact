import React, { useEffect } from "react";
import { TTodo } from "../../types/TodoTypes";
import { useState } from "react";
import { act } from "react-dom/test-utils";

type Props = {
  handleTodoAdd: (e: React.FormEvent) => void;
  setTodo: React.Dispatch<React.SetStateAction<TTodo>>;
  todo: TTodo;
};

const TTInputField: React.FC<Props> = ({ handleTodoAdd, setTodo, todo }) => {
  const [activeCheckbox, setActiveCheckbox] = useState<boolean>(false);
  const handleInputChange = (
    e: React.ChangeEvent,
    targetProperty: keyof TTodo
  ) => {
    const { value } = e.target as HTMLInputElement;
    setTodo((prev) => ({ ...prev, [targetProperty]: value }));
  };
  const handleCheckbox = (e: React.MouseEvent) => {
    let { checked } = e.target as HTMLInputElement;
    setTodo((prev) => ({ ...prev, completed: checked }));
  };
  return (
    <>
      <form className="" onSubmit={handleTodoAdd}>
        <input
          name="date"
          type="date"
          className="xjexsbox"
          defaultValue={todo.date ? todo.date : ""}
          placeholder={"What to do"}
          onChange={(e) => {
            handleInputChange(e, "date");
          }}
        />
        <input
          name="task"
          type="text"
          onChange={(e) => {
            handleInputChange(e, "task");
          }}
          defaultValue={todo.task ? todo.task : ""}
          placeholder="What to do, to do do..."
        />

        <label>Completed?</label>
        <input type="checkbox" onClick={handleCheckbox} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default TTInputField;
