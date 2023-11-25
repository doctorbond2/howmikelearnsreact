import React from "react";
import { useState, useEffect } from "react";
import P1Pokemon from "./P1Pokemon";
import { PokeBundle } from "../../types/PokeTypes";

type Props = {};

const P1Dropdown: React.FC<Props> = ({}) => {
  const [jsonData, setJsonData] = useState<Partial<PokeBundle>>({});
  const [pokeURL, setPokeURL] = useState<any>(null);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response: any = await fetch(url);
        const json: any = await response.json();
        setJsonData(json);
        console.log(json.results);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=151");
  }, []);
  const handlePokemonChange = (e: any) => {
    const url = e.currentTarget.value;
    console.log(url);
    setPokeURL(url);
  };
  return (
    <>
      <select onChange={handlePokemonChange}>
        {jsonData &&
          jsonData.results?.map((x, i) => (
            <option value={x.url}>{x.name}</option>
          ))}
      </select>
      {/* <button
        onClick={() => {
          setShowPokemon(!showPokemon);
        }}
      >
        Show Pokemon
      </button> */}
      {pokeURL && <P1Pokemon {...{ pokeURL }} />}
    </>
  );
};

export default P1Dropdown;
