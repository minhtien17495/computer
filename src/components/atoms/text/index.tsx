import React from "react";
import mapModifiers from "variables/functions";

type Props = {
  type?: "paragraph" | "label";
  modifiers?: ("bold" | "white")[];
};

const Text: React.FC<Props> = ({ children, modifiers, type = "subtitle" }) => {
  const className = mapModifiers("a-text", modifiers, type);
  return <p className={className}>{children}</p>;
};

export default Text;