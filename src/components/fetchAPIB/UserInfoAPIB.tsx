import React from "react";
import { Posts, User } from "../../types/TodoTypes";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardFooter,
} from "react-bootstrap";

type Props = {
  userinfo: Posts;
};

const UserInfoAPIB: React.FC<Props> = ({ userinfo }) => {
  const [user, setUser] = useState<Partial<User>>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userinfo.id}`
        );
        const json = await response.data;
        setUser(json);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchData();
  }, []);

  const [toggleInfo, setToggleInfo] = useState<boolean>(false);
  const [toggleMoreInfo, setToggleMoreInfo] = useState<boolean>(false);

  const { username, name, email, address: { street, city } = {} } = user;

  return (
    <>
      <button
        style={{ width: "fit-content" }}
        onClick={() => {
          setToggleInfo(!toggleInfo);
        }}
      >
        Toggle
      </button>

      {toggleInfo && (
        <Card className="card-wrap w-25">
          <CardHeader>
            <h2>{user && name}</h2>
          </CardHeader>
          <CardBody
            style={{ cursor: "pointer" }}
            onClick={() => {
              setToggleMoreInfo(!toggleMoreInfo);
            }}
          >
            {
              <CardText>
                <h3>{user && username}</h3>
                <h6>{user && email}</h6>
              </CardText>
            }
          </CardBody>

          <CardFooter>
            {toggleMoreInfo && (
              <CardText>
                <h3>{user && street}</h3>
                <h6>{user && city}</h6>
              </CardText>
            )}
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default UserInfoAPIB;
