import { useState, useEffect } from "react";

export function setMoney() {
  const [money, setMoney] = useState<number>(0);
  return money;
}

export function setCurrency() {
  const [currency, setCurrency] = useState<string>("EUR");
  return currency;
}
