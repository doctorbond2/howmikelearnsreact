import React from "react";
import { useState } from "react";
import { RUActivity } from "../../Mainpages/RouterUsers";
type Props = {
  setMyActivities: React.Dispatch<React.SetStateAction<RUActivity[]>>;
  myActivities: RUActivity[];
};

const RUHome: React.FC<Props> = ({ myActivities, setMyActivities }) => {
  const handleClick = (e: React.MouseEvent) => {
    const { textContent } = e.currentTarget as HTMLButtonElement;
    console.log(textContent);
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        {myActivities.map((x, index) => (
          <div key={index} className="RU-activity-box">
            <h3>{x.activity}</h3>
            STREAK: <h4>{x.streak}</h4>
            <button
              className="RU-add-button-style"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              +1
            </button>
            <button
              className="RU-add-button-style"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              -1
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default RUHome;
