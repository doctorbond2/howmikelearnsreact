import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import P1Pokemon from "./P1Pokemon";
import { PokeBundle, Result, SortedPokemon } from "../../types/PokeTypes";
import firstCharToUpperCase from "../../hooks/minifunctions";
import { Type } from "../../types/PokeTypes";

type Props = {};

const P1Dropdown: React.FC<Props> = ({}) => {
  const [jsonData, setJsonData] = useState<Partial<Result>[]>([]);
  const [typesData, SetTypesData] = useState<Partial<Result>[]>([]);
  const [pokeURL, setPokeURL] = useState<any>(null);
  const [sortedPokemon, setSortedPokemon] = useState<Partial<SortedPokemon>[]>(
    []
  );
  const [allPokemon, setAllPokemon] = useState<Partial<SortedPokemon>[]>([]);
  const [sortActive, setSortActive] = useState(false);
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
          : setJsonData(json.results);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=151");
    fetchData("https://pokeapi.co/api/v2/type");
  }, []);

  useEffect(() => {
    typesData && console.log("TYPESDATA:", typesData);
  }, [typesData]);
  useEffect(() => {
    console.log(currentType);
  }, [currentType]);
  useEffect(() => {
    setSortedPokemon([]);
    jsonData && console.log("jsonData:", jsonData);
    const fetchData = async (url: string) => {
      try {
        const response: any = await fetch(url);
        const json: any = await response.json();
        let updatedPokemon: SortedPokemon = {};
        if (json.types[1]) {
          updatedPokemon = {
            name: json.name,
            id: json.id,
            type1: json.types[0]?.type?.name,
            type2: json.types[1]?.type?.name,
            url: url,
          };
        } else if (json.types[0]) {
          updatedPokemon = {
            name: json.name,
            id: json.id,
            type1: json.types[0]?.type?.name,
            url: url,
          };
        }
        setAllPokemon((prev) => [...prev, updatedPokemon]);
        setSortedPokemon(allPokemon);
      } catch (error) {
        console.log("error", error);
      }
    };
    jsonData.forEach(async (x) => {
      x && x.url && (await fetchData(x.url));
    });
    sortedPokemon && console.log(sortedPokemon);
  }, [jsonData]);
  const handlePokemonChange = (e: ChangeEvent) => {
    const url = (e.currentTarget as HTMLSelectElement).value;
    setPokeURL(url);
    jsonData && console.log("SORTED POKEMON", sortedPokemon);
  };
  const handleTypeChange = async (e: ChangeEvent) => {
    const { value } = e.target as HTMLSelectElement;
    setCurrentType(value);
    value === "All" ? setSortActive(false) : setSortActive(true);
    if (value === "All") {
      setSortedPokemon(allPokemon);
    } else {
      setSortedPokemon(
        allPokemon.filter((x) => {
          return x.type1 === value || x.type2 === value;
        }) || allPokemon
      );
    }
  };

  return (
    <>
      <div className="P1-dropdown-wrap">
        <div className="P1-select-siderbar">
          {typesData && (
            <select
              style={{ height: "fit-content" }}
              onChange={handleTypeChange}
            >
              <option disabled selected>
                Type
              </option>
              <option value="All">All</option>
              {typesData.map((type, i) => (
                <option value={type.name}>
                  {firstCharToUpperCase(type.name)}
                </option>
              ))}
            </select>
          )}
          <select
            defaultValue=""
            onChange={handlePokemonChange}
            style={{ height: "fit-content" }}
          >
            <option disabled selected>
              Pokemon
            </option>
            {jsonData &&
              sortedPokemon.map((x, i) => (
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
