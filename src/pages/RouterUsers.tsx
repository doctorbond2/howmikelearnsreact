import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import RUser from "./subpages/RUser";
import RUserList from "./subpages/RUserList";
import Home from "./Home";

type Props = {};

const RouterUsers: React.FC<Props> = ({}) => {
  const handleClick = (index: number, e: MouseEvent) => {
    const { textContent } = e.target as HTMLButtonElement;
    const updatedActivity = myActivities.map((x, i) => {
      if (i === index) {
        console.log(x);
        return textContent === "+"
          ? { ...x, count: x.count + 1 }
          : { ...x, count: x.count - 1 };
      } else {
        return x;
      }
    });
    setMyActivities(updatedActivity);
  };
  const [myActivities, setMyActivities] = useState<any>([
    { activity: "Eat banana", count: 0 },
  ]);
  return (
    <>
      <Link to="user">To user</Link>
    </>
  );
};

export default RouterUsers;
