import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Posts } from "../../types/TodoTypes";
import PostsAPIB from "./PostsAPIB";
type Props = {};

const FetchAPIBMain: React.FC<Props> = ({}) => {
  const [data, setData] = useState<Posts[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await response.data;

        setData(json.splice(0, 10));
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <PostsAPIB {...{ data }} />
    </>
  );
};

export default FetchAPIBMain;
