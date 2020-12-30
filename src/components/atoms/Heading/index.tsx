import React from 'react';

import mapModifiers from 'variables/functions';

type Props = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  modifiers?: (
    | 'italic'
    | 'light'
    | 'normal'
    | 'bold'
    | 'semibold'
    | 'semibold7'
    | 'extrabold'
    | 'uppercase'
    | 'white'
    | 'green'
    | 'darkGreen'
    | 'yellow'
    | 'eerieBlack'
    | 'stroke'
    | 'strokeFill'
    | 'mediumChampagne'
    | 'center'
    | 'outerSpace'
    | 'capitalize'
    | 'strokeBlack'
    | 'strokeYellow'
    | 'letterSpacing'
    | 'paleGreen'
  )[];
};

const Heading: React.FC<Props> = ({ type, modifiers, children }) => {
  const CustomElement = type || 'h1';
  return (
    <CustomElement className={mapModifiers('a-heading', modifiers, type)}>
      {children}
    </CustomElement>
  );
};
export default Heading;
