import React from "react";
import { Posts, User } from "../../types/TodoTypes";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  userinfo: Posts;
};

const UserInfoAPIB: React.FC<Props> = ({ userinfo }) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userinfo.id}`
        );
        const json = await response.data;
        setUser(json);
        console.log(user);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchData();
  }, []);
  const u: User = user;
  const [toggleInfo, setToggleInfo] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setToggleInfo(!toggleInfo);
        }}
      >
        Toggle
      </button>
      {toggleInfo && (
        <div>
          <p>{user && u.name}</p>
          <p>{user && u.username}</p>
          <p>{user && u.email}</p>
        </div>
      )}
    </>
  );
};

export default UserInfoAPIB;
