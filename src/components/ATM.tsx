import React from "react";
import { useState, useEffect } from "react";
type Props = {};

const ATM: React.FC<Props> = (props) => {
  const [money, setMoney] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("EUR");
  return (
    <>
      <div className="ATM-base-style">
        <div className="money-display">{}</div>
        <div>
          <button
            className="atm-button"
            onClick={() => {
              setMoney(money + 100);
            }}
          >
            100
          </button>
          <button
            className="atm-button"
            onClick={() => {
              setMoney(money + 500);
            }}
          >
            500
          </button>
          <button
            className="atm-button"
            onClick={() => {
              setMoney(money + 1000);
            }}
          >
            1000
          </button>
          <button
            className="atm-button"
            onClick={() => {
              setMoney(0);
            }}
          >
            Clear
          </button>
          <br></br>
          <button>Enter</button>
          <button>Backspace</button>
        </div>
      </div>
    </>
  );
};

export default ATM;
