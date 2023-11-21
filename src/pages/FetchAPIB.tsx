import React from "react";
import NavigationBar from "../components/NavigationBar";
import FetchAPIBMain from "../components/fetchAPIB/fetchAPIBMain";
type Props = {};

const FetchAPIB = () => {
  return (
    <>
      <NavigationBar />
      <FetchAPIBMain />
    </>
  );
};

export default FetchAPIB;
