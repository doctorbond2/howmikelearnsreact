import React from "react";
import { useState, useEffect } from "react";
import { RUActivity } from "../../Mainpages/RouterUsers";
type Props = {
  setMyActivities: React.Dispatch<React.SetStateAction<RUActivity[]>>;
  myActivities: RUActivity[];
  handleClick: (e: React.MouseEvent, selectedIndex: number) => void;
};

const RUHome: React.FC<Props> = ({
  myActivities,
  setMyActivities,
  handleClick,
}) => {
  useEffect(() => {
    console.log(myActivities);
  }, [myActivities]);
  return (
    <>
      <div style={{ width: "100%" }}>
        {myActivities &&
          myActivities.map((x, index) => (
            <div key={index} className="RU-activity-box">
              <h3>{x?.activity}</h3>
              STREAK: <h4>{x?.streak}</h4>
              <button
                className="RU-add-button-style"
                onClick={(e) => {
                  handleClick(e, index);
                }}
              >
                +1
              </button>
              <button
                className="RU-add-button-style"
                onClick={(e) => {
                  handleClick(e, index);
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
