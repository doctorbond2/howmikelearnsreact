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
  const [myActivities, setMyActivities] = useState<RUActivity[]>([
    { activity: "Eat banana", streak: 0 },
  ]);
  const [nextThing, setNextThing] = useState<Partial<RUActivity>>({});
  const handleSubmit = (e: React.MouseEvent) => {
    console.log(e.currentTarget);
  };
  const handleChange = (e: React.ChangeEvent, changeTarget: RUActivity) => {
    const { value } = e.target as HTMLInputElement;
    let updatedThing: RUActivity = { ...nextThing, [changeTarget]: value };
    setNextThing(updatedThing);
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
                }}
              />
            }
          />
          <Route path="userlist" element={<RUserList />} />
          <Route
            path="/"
            element={<RUHome {...{ myActivities, setMyActivities }} />}
          ></Route>
        </Routes>
      </div>
      <Outlet />
    </>
  );
};

export default RouterUsers;
