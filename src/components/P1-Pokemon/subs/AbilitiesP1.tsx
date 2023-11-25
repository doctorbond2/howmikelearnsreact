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
    <div>
      <Container className="P1-abilities-container w-25">
        <h2>Main Abilities</h2>
        <Row>
          {abilities &&
            pokemonAbilities.map((x: string, i) => (
              <Col className="col-6">
                <h5>
                  <a className="P1-ability-name">
                    {x && firstCharToUpperCase(x)}
                  </a>
                </h5>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default AbilitiesP1;
