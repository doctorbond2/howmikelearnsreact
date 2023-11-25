import React from "react";
import { useState, useEffect } from "react";
import { Pokedex } from "../../types/PokeTypes";
import AbilitiesP1 from "./subs/AbilitiesP1";
import StatsP1 from "./subs/StatsP1";
import firstCharToUpperCase from "../../hooks/minifunctions";
import ImageP1 from "./subs/ImageP1";
import { Card, Button } from "react-bootstrap";
type Props = {
  pokeURL: string;
};

const P1Pokemon: React.FC<Props> = ({ pokeURL }) => {
  const [pokeData, setPokeData] = useState<Pokedex>({});
  useEffect(() => {
    console.log(pokeURL);
    const fetchData = async () => {
      try {
        const response: any = await fetch(pokeURL);
        const json: any = await response.json();
        setPokeData(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [pokeURL]);
  const { name, abilities, id, sprites, types }: Pokedex = pokeData;

  return (
    <>
      <Card className="w-50">
        <Card.Header>
          <Card.Title>
            <h1>
              #{id && id} {}
              {pokeData && firstCharToUpperCase(name)}
            </h1>
          </Card.Title>
        </Card.Header>
        {pokeData && sprites && (
          <ImageP1
            imageContent={sprites?.other?.["official-artwork"]?.front_default}
            {...{ types }}
          />
        )}
        <Card.Body>
          <StatsP1 />
        </Card.Body>
        <Card.Footer>
          {pokeData && abilities && abilities && (
            <AbilitiesP1 abilities={pokeData && abilities} />
          )}
        </Card.Footer>
      </Card>
    </>
  );
};

export default P1Pokemon;
