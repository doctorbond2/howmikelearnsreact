import React from "react";
import { useState } from "react";
import { RUActivity } from "../../Mainpages/RouterUsers";
type Props = {
  setMyActivities: React.Dispatch<React.SetStateAction<RUActivity[]>>;
  handleSubmit: (e: React.MouseEvent) => void;
  handleChange: (e: React.ChangeEvent, changeTarget: keyof RUActivity) => void;
  setNextThing: React.Dispatch<React.SetStateAction<Partial<RUActivity>>>;
  myActivities: RUActivity[];
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
        <input
          type="text"
          placeholder="Task"
          onChange={(e) => {
            handleChange(e, "activity");
          }}
        />
        <br></br>
        <input
          type="number"
          placeholder="Streak"
          onChange={(e) => {
            handleChange(e, "streak");
          }}
        />
        <button onClick={handleSubmit}>Add task</button>
      </div>
    </>
  );
};

export default RUser;
