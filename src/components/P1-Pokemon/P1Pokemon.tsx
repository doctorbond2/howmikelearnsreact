import React from "react";
import { useState, useEffect } from "react";
import { Pokemon } from "../../types/PokeTypes";
import AbilitiesP1 from "./subs/AbilitiesP1";
type Props = {
  pokeURL: string;
};

const P1Pokemon: React.FC<Props> = ({ pokeURL }) => {
  const [pokeData, setPokeData] = useState<Pokemon>({});
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
  return (
    <>
      <AbilitiesP1 />
    </>
  );
};

export default P1Pokemon;
