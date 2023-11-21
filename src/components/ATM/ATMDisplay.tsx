import React from "react";
import { useState, useEffect } from "react";
import ATM from "./ATM";
type Props = {
  money: number;
  currency: string;
  message: string;
  bankMoney: number;
};

const ATMDisplay: React.FC<Props> = ({
  currency,
  money,
  message,
  bankMoney,
}) => {
  useEffect(() => {}, [message]);
  return (
    <>
      <div className="main-display">
        {message ? (
          <div className="message-display">{message}</div>
        ) : (
          <div className="m-c-display">
            <h4 className="money-display">{money}</h4>
            <h5 className="currency-display">{currency}</h5>
          </div>
        )}

        <h6 className="customer-atm-display">
          {!message && (
            <div>
              <p> In Account: {bankMoney} EUR</p>{" "}
              <h6>
                Conversion rate:{" "}
                {currency === "SEK"
                  ? `${money / 10} EUR to ${money} SEK`
                  : "None"}
              </h6>
            </div>
          )}
        </h6>
      </div>
    </>
  );
};

export default ATMDisplay;
