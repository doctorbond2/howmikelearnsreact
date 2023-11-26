import { Ability } from "../types/PokeTypes";

export const firstCharToUpperCase = (
  str: string | undefined
): string | undefined => {
  if (!str) {
    return undefined;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export default firstCharToUpperCase;

//funktion tar abilities.ability
//sorterar sedan arr.
export const abilityDraft = (arr: Ability[]): string[] => {
  const abilityDraft = new Array(4).fill("");
  arr.forEach((x, i) => {
    console.log(`Loop: ${i + 1} Ability :${x.ability?.name}`, x.slot);
    if (x.slot) abilityDraft[x.slot - 1] = x.ability?.name;
  });
  console.log(abilityDraft);
  return abilityDraft;
};
