import React, { useEffect } from "react";
import UserInfoAPIB from "./UserInfoAPIB";
import { Posts } from "../../types/TodoTypes";
import { useState } from "react";

type Props = {
  data: Posts[];
};
let limit: number = 0;
const PostsAPIB: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div>
        {data.map(
          (x, i) =>
            limit < 10 && (
              <div key={i}>
                <UserInfoAPIB userinfo={x} />
              </div>
            )
        )}
      </div>
    </>
  );
};

export default PostsAPIB;
