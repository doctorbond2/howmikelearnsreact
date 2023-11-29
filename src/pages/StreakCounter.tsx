import React from "react";
import { Link } from "react-router-dom";

type Props = {
  myActivities: any;
  setMyActivities: any;
};

const StreakCounter: React.FC = ({ myActivities, setMyActivities }) => {
  const handleAdd = (e: any) => {
    e.preventDefault();
    let addText = document.querySelector("#task-input") as HTMLInputElement;
    let addNumber = document.querySelector("#number-input") as HTMLInputElement;
    let newActivity = { activity: addText.value, count: addNumber.value };
    console.log(newActivity);
    setMyActivities([...myActivities, newActivity]);
  };
  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <input id="task-input" type="text"></input>
          <input id="number-input" type="number"></input>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <Link to="/">TOOO</Link>
    </>
  );
};

export default StreakCounter;
