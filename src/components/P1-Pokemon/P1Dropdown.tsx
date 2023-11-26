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
  const [sortedPokemon, setSortedPokemon] = useState<Partial<string>[]>([]);
  const [currentType, setCurrentType] = useState<string>("");

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
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=151");
    fetchData("https://pokeapi.co/api/v2/type");
  }, []);

  useEffect(() => {
    if (jsonData) {
      const sortedNames = jsonData.results?.map((x: Result, i) => {
        if (currentType === x.name) {
          return currentType;
        } else {
          console.log("Type not found", x.name);
        }
      });
      console.log("Sorted Names", sortedNames);
    }
  }, [currentType]);
  const handlePokemonChange = async (e: ChangeEvent) => {
    const url = (e.currentTarget as HTMLSelectElement).value;
    console.log(url);
    setPokeURL(url);
    try {
      const response: any = await fetch(url);
      const json: any = await response.json();
      json && console.log("THE ID", json.types[0].type.name);
      setCurrentType(json.types[0].type.name);
      console.log("Current Type:", currentType);
    } catch (error) {
      console.log("fail to fetch poketype", error);
    }
  };
  const handleTypeChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLSelectElement;
    setCurrentType(value);
  };
  return (
    <>
      <div className="P1-dropdown-wrap">
        <div className="P1-select-siderbar">
          {typesData && (
            <select style={{ height: "fit-content" }}>
              {typesData.map((type, i) => (
                <option value={type.name}>
                  {firstCharToUpperCase(type.name)}
                </option>
              ))}
            </select>
          )}
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
        </div>

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
