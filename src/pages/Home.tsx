import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
interface Props {}

const Home: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <Link to="/TillFredag">Go to uppgift till fredag</Link>
      <button
        onClick={() => {
          navigate("/TillFredag");
        }}
      >
        Go to?
      </button>
    </>
  );
};

export default Home;
