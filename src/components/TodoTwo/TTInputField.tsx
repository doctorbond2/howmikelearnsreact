import React, { useEffect } from "react";
import { TTodo } from "../../types/TodoTypes";

type Props = {
  handleTodoAdd: (e: React.FormEvent) => void;
  setTodo: React.Dispatch<React.SetStateAction<TTodo | undefined>>;
  todo: TTodo | undefined;
};

const TTInputField: React.FC<Props> = ({ handleTodoAdd, setTodo, todo }) => {
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
  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <>
      <form className="TT-input-form" onSubmit={handleTodoAdd}>
        <input
          name="date"
          type="date"
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
        />

        <label>Completed?</label>
        <input type="checkbox" onClick={handleCheckbox} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default TTInputField;
