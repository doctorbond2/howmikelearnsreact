import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import RUser from "../subpages/RouterUser/RUser";
import RUserList from "../subpages/RouterUser/RUserList";
import RUHome from "../subpages/RouterUser/RUHome";

export interface RUActivity {
  activity?: string;
  streak?: number;
}
const RouterUsers: React.FC = () => {
  const location = useLocation();
  const [myActivities, setMyActivities] = useState<RUActivity[]>([]);
  const [nextThing, setNextThing] = useState<Partial<RUActivity>>({});
  const handleSubmit = (e: React.MouseEvent) => {
    if (nextThing.activity && nextThing.streak)
      setMyActivities([...myActivities, nextThing]);
  };
  const handleChange = (
    e: React.ChangeEvent,
    changeTarget: keyof RUActivity
  ) => {
    const { value } = e.target as HTMLInputElement;
    console.log(value);
    let updatedThing: RUActivity = { ...nextThing, [changeTarget]: value };
    setNextThing(updatedThing);
    console.log(updatedThing);
  };
  const handleClick = (e: React.MouseEvent, selectedIndex: number) => {
    const { textContent } = e.currentTarget as HTMLButtonElement;
    console.log(textContent);
    let updatedActivities: RUActivity[] =
      myActivities.map((x: RUActivity, i) => {
        if (x.streak && x.activity) {
          return i === selectedIndex && textContent === "+1"
            ? { ...x, streak: Number(x.streak) + 1 }
            : i === selectedIndex && textContent === "-1"
            ? { ...x, streak: Number(x.streak) - 1 }
            : x;
        }
        return x;
      }) || [];
    setMyActivities(updatedActivities);
  };
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <nav className="RU-navbar">
          <Link to="user">To user</Link>
          <Link to="userlist">To user List</Link>
          <Link to="./">HOME RU</Link>
        </nav>

        <Routes>
          <Route
            path="user"
            element={
              <RUser
                {...{
                  setMyActivities,
                  handleSubmit,
                  handleChange,
                  setNextThing,
                  myActivities,
                }}
              />
            }
          />
          <Route path="userlist" element={<RUserList />} />
          <Route
            path="/"
            element={
              <RUHome {...{ myActivities, setMyActivities, handleClick }} />
            }
          ></Route>
        </Routes>
      </div>
      <Outlet />
    </>
  );
};

export default RouterUsers;
