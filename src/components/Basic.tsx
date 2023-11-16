import React from "react";
import ATM from "./ATM";

type Props = {};

const basicStyle = {
  backgroundColor: "lightgray",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
};
const Basic: React.FC = (props: Props) => {
  return (
    <>
      <div className="Basic" style={basicStyle}>
        <ATM />
      </div>
    </>
  );
};

export default Basic;
