import React from "react";

import mapModifiers from "variables/functions";

type Props = {
  src: string;
  alt?: string;
  ratio?: 
  "1x1" | 
  "6x4" |
  "650x433";
};

const Image: React.FC<Props> = ({ src, alt, ratio }) => {
  const classname = mapModifiers("a-image", ratio);
  return (
    <div className={classname}>
      <img className="a-image_img" src={src} alt={alt} />
    </div>
  );
};
export default Image;
