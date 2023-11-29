import React from "react";
import { useState } from "react";
import { RUActivity } from "../../Mainpages/RouterUsers";
type Props = {
  setMyActivities: React.Dispatch<React.SetStateAction<RUActivity[]>>;
  handleSubmit: (e: React.MouseEvent) => void;
  handleChange: (e: React.ChangeEvent) => void;
  setNextThing: React.Dispatch<React.SetStateAction<Partial<RUActivity>>>;
};

const RUser: React.FC<Props> = ({
  setMyActivities,
  handleSubmit,
  handleChange,
  setNextThing,
}) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          width: "100vw",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <input type="text" placeholder="Task" onChange={handleChange} />
        <br></br>
        <input type="number" placeholder="Streak" />
        <button onClick={handleSubmit}>Add task</button>
      </div>
    </>
  );
};

export default RUser;
