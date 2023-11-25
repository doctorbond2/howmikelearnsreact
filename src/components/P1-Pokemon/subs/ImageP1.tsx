import React from "react";
import { Sprites } from "../../../types/PokeTypes";
import { Type } from "../../../types/PokeTypes";
import { useState, useEffect } from "react";
type Props = {
  imageContent: string | undefined;
  types?: Type[];
};

const ImageP1: React.FC<Props> = ({ imageContent, types }) => {
  const officialImage: string | undefined = imageContent;
  const [pokeType, setPokeType] = useState<Partial<Type>>({});
  const [activeImage, setActiveImage] = useState<string | undefined>(
    officialImage
  );
  useEffect(() => {
    setActiveImage(officialImage);
    types && setPokeType(types[0]);
    console.log("POKETYPE:", pokeType);
  }, [imageContent, types]);

  useEffect(() => {
    console.log(officialImage);
  }, [activeImage]);

  return (
    <>
      {activeImage ? (
        <div className={`P1-card-image-${pokeType?.type?.name}`}>
          <img src={activeImage} />
        </div>
      ) : (
        "No image available"
      )}
    </>
  );
};
// other &&
//   other?.["official-artwork"]?.front_default?

export default ImageP1;
