import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const About = (props: Props) => {
  const [message, setMessage] = useState("");
  const { string, number } = useParams();

  useEffect(() => {
    if (string) {
      setMessage("number is: " + string);
    } else if (number) {
      setMessage(number);
    }
  }, []);
  return (
    <>
      <div>asd</div>
      <div>{message}</div>
    </>
  );
};

export default About;
