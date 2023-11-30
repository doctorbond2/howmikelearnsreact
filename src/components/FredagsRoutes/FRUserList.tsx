import React from "react";
import { FRInter } from "../../types/TodoTypes";
import FRUser from "./FRUser";

type Props = {
  userList: FRInter[];
};

const FRUserList: React.FC<Props> = ({ userList }) => {
  return (
    <>
      {userList && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {userList &&
            userList.map((user, index) => (
              <FRUser key={"FR-user-" + index} user={user} />
            ))}
        </div>
      )}
    </>
  );
};

export default FRUserList;
