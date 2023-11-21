import React from "react";
import { useState } from "react";
type Props = {
  customerEURO: number;
  customerSEK: number;
};

const ATMCustomer: React.FC<Props> = ({ customerEURO, customerSEK }) => {
  const [customMoney, setCustomMoney] = useState<string | number>(customerEURO);
  return (
    <>
      <div className="customer">
        Customer:
        <p>Customer SEK: {customerSEK}</p>
        <p>Customer EUR: {customerEURO}</p>
      </div>
    </>
  );
};

export default ATMCustomer;
