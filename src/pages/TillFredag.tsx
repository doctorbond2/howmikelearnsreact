import React from "react";
import Basic from "../components/Basic";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
type Props = {};

const TillFredag = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        To home
      </button>
      <Basic />
    </>
  );
};

export default TillFredag;
