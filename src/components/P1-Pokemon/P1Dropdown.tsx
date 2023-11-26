import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import P1Pokemon from "./P1Pokemon";
import { PokeBundle, Result } from "../../types/PokeTypes";
import firstCharToUpperCase from "../../hooks/minifunctions";

type Props = {};

const P1Dropdown: React.FC<Props> = ({}) => {
  const [jsonData, setJsonData] = useState<Partial<PokeBundle>>({});
  const [typesData, SetTypesData] = useState<Partial<Result>[]>([]);
  const [pokeURL, setPokeURL] = useState<any>(null);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const param = url.split("/").pop();
      console.log(param);
      try {
        const response: any = await fetch(url);
        const json: any = await response.json();
        param && param === "type"
          ? SetTypesData(json.results)
          : setJsonData(json);
        console.log(json.results);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=151");
    fetchData("https://pokeapi.co/api/v2/type");
  }, []);

  const handlePokemonChange = (e: ChangeEvent) => {
    const url = (e.currentTarget as HTMLSelectElement).value;
    console.log(url);
    setPokeURL(url);
  };
  return (
    <>
      <div className="P1-dropdown-wrap">
        <div
          style={{
            fontSize: "1.1rem",
            width: "fit-content",
          }}
        >
          {typesData && (
            <select style={{ height: "fit-content" }}>
              {typesData.map((type, i) => (
                <option>{firstCharToUpperCase(type.name)}</option>
              ))}
            </select>
          )}
        </div>
        <select
          onChange={handlePokemonChange}
          style={{ height: "fit-content" }}
        >
          {jsonData &&
            jsonData.results?.map((x, i) => (
              <option key={`op-${i}`} value={x.url}>
                {firstCharToUpperCase(x.name)}
              </option>
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
      </div>
    </>
  );
};

export default P1Dropdown;
