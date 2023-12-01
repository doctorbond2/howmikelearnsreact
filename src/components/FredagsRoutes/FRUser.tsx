import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FRInter } from "../../types/TodoTypes";

type Props = {
  user: FRInter;
};

const FRUser: React.FC<Props> = ({ user }) => {
  const { name, userName, age } = user;

  return (
    <>
      {" "}
      {
        <Link style={{ width: "fit-content" }} to="FRProfile" state={user}>
          {userName}
        </Link>
      }
    </>
  );
};

export default FRUser;
