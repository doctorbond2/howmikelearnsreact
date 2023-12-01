import React from "react";
import { Link } from "react-router-dom";
import ParamsTodos from "./ParamsTodos";
type Props = {};

const ParamsError = (props: Props) => {
  return (
    <div>
      <Link to="ParamsPractice">Back to home!</Link>
    </div>
  );
};

export default ParamsError;
