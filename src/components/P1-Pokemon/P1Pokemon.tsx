import React from "react";
import { useState, useEffect } from "react";
import { Pokedex } from "../../types/PokeTypes";
import AbilitiesP1 from "./subs/AbilitiesP1";
import firstCharToUpperCase from "../../hooks/minifunctions";
import ImageP1 from "./subs/ImageP1";
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
  const { name, abilities, id, sprites }: Pokedex = pokeData;

  return (
    <>
      <h1>
        #{id && id + 1} {}
        {pokeData && firstCharToUpperCase(name)}
      </h1>
      {pokeData && sprites && (
        <ImageP1
          imageContent={sprites?.other?.["official-artwork"]?.front_default}
        />
      )}
      {pokeData && abilities && abilities && (
        <AbilitiesP1 abilities={pokeData && abilities} />
      )}
    </>
  );
};

export default P1Pokemon;
