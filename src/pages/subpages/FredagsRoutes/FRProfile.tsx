import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
type Props = {};

const FRProfile: React.FC<Props> = ({}) => {
  const location = useLocation();
  const {
    state: {
      name,
      userName,
      age,
      location: { country, city },
    },
  } = location;

  useEffect(() => {
    console.log(location.state);
  }, []);
  return (
    <>
      <div>
        <h3>
          <i>{name}</i>
        </h3>
        <h5>Age: {age}</h5>
        <h6>
          Lives in {city}, {country}
        </h6>
      </div>
    </>
  );
};

export default FRProfile;
