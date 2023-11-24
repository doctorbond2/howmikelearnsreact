import React from "react";
import NavigationBar from "../components/NavigationBar";
type Props = {};
import P1Main from "../components/P1-Pokemon/P1Main";

const P1Pokemon: React.FC<Props> = ({}) => {
  return (
    <>
      <NavigationBar />
      <P1Main />
    </>
  );
};

export default P1Pokemon;
