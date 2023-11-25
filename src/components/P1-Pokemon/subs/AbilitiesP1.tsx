import React from "react";
import { Ability, Pokedex } from "../../../types/PokeTypes";
import { useEffect, useState } from "react";
import {
  firstCharToUpperCase,
  abilityDraft,
} from "../../../hooks/minifunctions";

import { Container, Row, Col } from "react-bootstrap";

type Props = {
  abilities?: Ability[];
};

const AbilitiesP1: React.FC<Props> = ({ abilities }) => {
  const [pokemonAbilities, setPokemonAbilities] = useState<string[]>([]);
  useEffect(() => {
    abilities && setPokemonAbilities(abilityDraft(abilities));
    console.log(pokemonAbilities);
  }, [abilities]);

  return (
    <Container className="P1-abilities-container">
      <h5 style={{ fontFamily: "Gill Sans" }}>Main Abilities</h5>
      <Row>
        {abilities &&
          pokemonAbilities.map((x: string, i) => (
            <Col className="col-6 P1-col-ability-style">
              <h5>
                <p className="P1-ability-name">
                  {x && firstCharToUpperCase(x)}
                </p>
              </h5>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AbilitiesP1;
