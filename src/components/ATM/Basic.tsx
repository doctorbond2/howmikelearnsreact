import React from "react";
import ATM from "./ATM";
import { useState, useEffect } from "react";

type Props = {};

const Basic: React.FC = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show ATM
      </button>
      <div className="Basic basicStyle">{show && <ATM />}</div>
    </>
  );
};

export default Basic;
