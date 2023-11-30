import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import FRHome from "../subpages/FredagsRoutes/FRHome";
import FRUserList from "../subpages/FredagsRoutes/FRUserList";
import FRUser from "../subpages/FredagsRoutes/FRUser";
import { FRInter } from "../../types/TodoTypes";

type Props = {};

const FredagsRoutes: React.FC<Props> = ({}) => {
  const [mainData, setMainData] = useState<FRInter[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("src/JSON/frusersusersdata.json");
      const resolved = await response.json();
      resolved && setMainData(resolved);
      console.log(resolved);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Link to="FRUserlist">Userlist</Link>
      <Link to="FRUser">User</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<FRHome />} />
        <Route path="FRUserList" element={<FRUserList />} />
        <Route path="FRUser" element={<FRUser />} />
      </Routes>
    </>
  );
};

export default FredagsRoutes;
