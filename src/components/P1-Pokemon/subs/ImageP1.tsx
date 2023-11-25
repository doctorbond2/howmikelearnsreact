import React, { useEffect } from "react";
import { Sprites } from "../../../types/PokeTypes";
import { useState } from "react";
type Props = {
  imageContent: string | undefined;
};

const ImageP1: React.FC<Props> = ({ imageContent }) => {
  const officialImage: string | undefined = imageContent;

  useEffect(() => {
    setActiveImage(officialImage);
  });
  const [activeImage, setActiveImage] = useState<string | undefined>(
    officialImage
  );
  useEffect(() => {
    console.log(officialImage);
  }, [activeImage]);

  return (
    <>
      <div>
        {activeImage ? <img src={activeImage} /> : "No image available"}
      </div>
    </>
  );
};
// other &&
//   other?.["official-artwork"]?.front_default?

export default ImageP1;
