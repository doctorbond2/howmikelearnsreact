import React, { ChangeEvent } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import SetTheCount from "./SetTheCount";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <Link to="/StreakCounter">asd</Link>
    </>
  );
};

export default Home;
