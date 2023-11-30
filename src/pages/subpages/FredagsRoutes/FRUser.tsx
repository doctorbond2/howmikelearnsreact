import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {};

const FRUser: React.FC<Props> = ({}) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  return <div>FRUser</div>;
};

export default FRUser;
