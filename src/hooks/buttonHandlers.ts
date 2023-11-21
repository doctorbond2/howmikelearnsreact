import { useState, useEffect } from "react";
import { MouseEvent } from "react";
import ATM from "../components/ATM/ATM";

// const [money, setMoney] = useState<number>(0);
// const [currency, setCurrency] = useState<string>("");
// const [message, setMessage] = useState<string>("");
// const [timeoutState, setTimeoutState] = useState<boolean>(false);
// const [customerMoney, setCustomerMoney] = useState<number>(10000);
// const [bankMoney, setBankMoney] = useState<number>(4000);

const ATMButtonHandler = (e: React.MouseEvent<HTMLElement>) => {
  const target = e.target as HTMLButtonElement;
  console.log(target.textContent);
};

export default ATMButtonHandler;
