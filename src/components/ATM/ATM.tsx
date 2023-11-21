import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import ATMDisplay from "./ATMDisplay";
import ATMCustomer from "./ATMCustomer";
import ATMButtonHandler from "../../hooks/buttonHandlers";
type Props = {};

const ATM: React.FC<Props> = () => {
  const [money, setMoney] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [timeoutState, setTimeoutState] = useState<boolean>(false);
  const [customerEURO, setCustomerEURO] = useState<number>(0);
  const [customerSEK, setCustomerSEK] = useState<number>(0);
  const [bankMoney, setBankMoney] = useState<number>(4000);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    console.log(typeof target.textContent);
    switch (target.textContent) {
      case "100":
        !currency
          ? setMessage("Please select a currency")
          : setMoney(money + 100);
        break;
      case "500":
        !currency
          ? setMessage("Please select a currency")
          : setMoney(money + 500);
        break;
      case "1000":
        !currency
          ? setMessage("Please select a currency")
          : setMoney(money + 1000);
        break;
      case "Clear":
        setMoney(0);
        setCurrency("");
        setMessage("State reset");
        break;
      case "SEK":
        setCurrency("SEK");
        break;
      case "EUR":
        setCurrency("EUR");
        break;
      case "Withdraw":
        if (!money || !currency) {
          setMessage("Please select amount to withdraw");
        } else if (money <= bankMoney && currency === "EUR") {
          setCustomerEURO(customerEURO + money);
          setBankMoney(bankMoney - money);
          setMessage("Money Withdrawn!");
          setCurrency("");
          setMoney(0);
        } else if (money <= bankMoney && currency === "SEK") {
          setCustomerSEK(customerSEK + money);
          setBankMoney(bankMoney - money / 10);
          setMessage("Money Withdrawn!");
          setCurrency("");
          setMoney(0);
        } else {
          setMessage("Not enough in your account.");
        }
        break;
      case "Deposit":
        if (!money || !currency) {
          setMessage("Please select amount to deposit");
        } else if (money <= customerEURO && currency === "EUR") {
          setCustomerEURO(customerEURO - money);
          setBankMoney(bankMoney + money);
          setCurrency("");
          setMoney(0);
        } else if (money <= customerSEK && currency === "SEK") {
          setCustomerSEK(customerSEK - money);
          setBankMoney(bankMoney + money / 10);
          setCurrency("");
          setMoney(0);
        } else {
          setMessage("You do not have enough to deposit");
        }
        break;
    }
  };
  useEffect(() => {
    setMessage("Booting up...");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, []);

  useEffect(() => {
    if (!timeoutState && message !== "") {
      setTimeoutState(true);
      setTimeout(() => {
        console.log("timeout ended");
        setMessage("");
        setTimeoutState(false);
      }, 1500);
    } else return;
  }, [message]);

  return (
    <>
      <div className="ATM-base-style">
        <ATMDisplay {...{ money, currency, message, bankMoney }} />
        <div className="button-layout">
          <button className="atm-button" onClick={handleClick}>
            100
          </button>
          <button className="atm-button" onClick={handleClick}>
            500
          </button>
          <button className="atm-button" onClick={handleClick}>
            1000
          </button>
          <br></br>
          <button className="atm-button" onClick={handleClick}>
            Clear
          </button>
          <button className="atm-button" onClick={handleClick}>
            SEK
          </button>
          <button className="atm-button" onClick={handleClick}>
            EUR
          </button>
          <br></br>
          <button className="atm-button" onClick={handleClick}>
            Withdraw
          </button>
          <button className="atm-button" onClick={handleClick}>
            Deposit
          </button>
        </div>
      </div>
      <ATMCustomer {...{ customerEURO, customerSEK }} />
    </>
  );
};

export default ATM;
