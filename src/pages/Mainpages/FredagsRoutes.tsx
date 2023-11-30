import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import FRHome from "../subpages/FredagsRoutes/FRHome";
import FRProfile from "../subpages/FredagsRoutes/FRProfile";
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
      <Link to="./">Home</Link>
      <Routes>
        <Route path="/" element={<FRHome userList={mainData} />} />
        <Route path="FRProfile" element={<FRProfile />} />
      </Routes>
    </>
  );
};

export default FredagsRoutes;
