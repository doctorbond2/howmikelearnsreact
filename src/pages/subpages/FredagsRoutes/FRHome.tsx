import React from "react";
import { FRInter } from "../../../types/TodoTypes";
import FRUserList from "../../../components/FredagsRoutes/FRUserList";
type Props = {
  userList: FRInter[];
};

const FRHome: React.FC<Props> = ({ userList }) => {
  return (
    <>
      <FRUserList userList={userList} />
    </>
  );
};

export default FRHome;
