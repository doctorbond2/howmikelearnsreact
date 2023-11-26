import React from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";

import P1Dropdown from "./P1Dropdown";

type Props = {};

const P1Main: React.FC<Props> = ({}) => {
  const [pShow, setPShow] = useState<boolean>(false);
  return (
    <>
      <div className="P1Main">
        <Container style={{ backgroundColor: "lightgray", height: "100vh" }}>
          <button
            style={{ fontSize: "1.6rem" }}
            onClick={() => {
              setPShow(!pShow);
            }}
          >
            GO
          </button>

          {pShow && <P1Dropdown />}
        </Container>
      </div>
    </>
  );
};

export default P1Main;
