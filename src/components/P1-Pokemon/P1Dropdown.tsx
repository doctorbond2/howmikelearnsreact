import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import P1Pokemon from "./P1Pokemon";
import { PokeBundle, Result } from "../../types/PokeTypes";
import firstCharToUpperCase from "../../hooks/minifunctions";
import { Type } from "../../types/PokeTypes";

type Props = {};

const P1Dropdown: React.FC<Props> = ({}) => {
  const [jsonData, setJsonData] = useState<Partial<PokeBundle>>({});
  const [typesData, SetTypesData] = useState<Partial<Result>[]>([]);
  const [pokeURL, setPokeURL] = useState<any>(null);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);
  const [sortedPokemon, setSortedPokemon] = useState<Partial<string>[]>([]);
  const [currentType, setCurrentType] = useState<string>("");
  const [currentPokemon, setCurrentPokemon] = useState<string>("");

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
          null;
        }
      });
      // console.log("Sorted Names", sortedNames);
    }
  }, [currentType]);
  const handlePokemonChange = (e: ChangeEvent) => {
    const url = (e.currentTarget as HTMLSelectElement).value;

    setPokeURL(url);
  };
  const handleTypeChange = async (e: ChangeEvent) => {
    const { value } = e.target as HTMLSelectElement;
    console.log("selected TYPE:", value);
    setCurrentType(value);

    if (jsonData) {
      try {
        const sortList: any[] = await Promise.all(
          jsonData.results?.map(async (x) => {
            const response: any = await fetch(x.url);
            const json: any = await response.json();
            json && console.log("test2", json.types);
            return json;
          }) || sortedPokemon
        );
        sortList && console.log("sortlist", sortList);
        const sortedPoki: string[] = sortList.filter((x: any) => {
          const typeName1: any = x[0].type.name ? x[0].type.name : "";
          const typeName2 = x[1].type.name ? x[1].type.name : "";
        });
      } catch (error) {
        console.log("fail to fetch poketype", error);
      }
      try {
        const sortedPoki: string[] = jsonData.results?.filter(async (x, i) => {
          const response: any = await fetch(x.url);
          const json: any = await response.json();
          if (json.types) {
            const typeName1 = json.types[0].type.name
              ? json.types[0].type.name
              : "";
            const typeName2 = json.types[1].type.name
              ? json.types[1].type.name
              : "";
            // json && console.log("FETCHED TYPE", json.types[0].type.name);
            if (typeName1 === currentType || typeName2 === currentType) {
              console.log(`CORRECT: ${x.name} matches with ${currentType}`);
              return x.name;
            } else {
            }
          }
        });
        sortedPoki && setSortedPokemon([...sortedPoki]);
        sortedPoki && console.log("sorted pokemon:", sortedPokemon);

        // json && console.log("THE ID", json.types[0].type.name);
        // json && setCurrentType(json.types[0].type.name);
      } catch (error) {
        console.log("fail to fetch poketype", error);
      }
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
