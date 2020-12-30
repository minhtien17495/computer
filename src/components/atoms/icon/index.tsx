import React from 'react';

import mapModifiers from 'variables/functions';

export const iconList = {
  addPhoto: 'addPhoto',
  add: 'add',
  arrowDown: 'arrowDown',
  arrowLeft: 'arrowLeft',
  arrowNext: 'arrowNext',
  arrowNextWhite: 'arrowNextWhite',
  arrowPrevWhite: 'arrowPrevWhite',
  arrowNextSmall: 'arrowNextSmall',
  arrowPrevSmall: 'arrowPrevSmall',
  arrowPrevious: 'arrowPrevious',
  arrowNextBlack: 'arrowNextBlack',
  arrowPrevBlack: 'arrowPrevBlack',
  arrowNextGreen: 'arrowNextGreen',
  arrowRight: 'arrowRight',
  arrowUp: 'arrowUp',
  call: 'call',
  callWhite: 'callWhite',
  checked: 'checked',
  close: 'close',
  closeWhite: 'closeWhite',
  dateRange: 'dateRange',
  deleteOutline: 'deleteOutline',
  edit: 'edit',
  email: 'email',
  emojiEvents: 'emojiEvents',
  errorOutline: 'errorOutline',
  fullscreenExit: 'fullscreenExit',
  fullscreen: 'fullscreen',
  facebook: 'facebook',
  gTranslate: 'gTranslate',
  gilf: 'gilf',
  translate: 'translate',
  twister: 'twister',
  tripadsor: 'tripadsor',
  info: 'info',
  language: 'language',
  location: 'location',
  locationGray: 'locationGray',
  pauseCircleOutline: 'pauseCircleOutline',
  pause: 'pause',
  person: 'person',
  playArrow: 'playArrow',
  playCircleOutline: 'playCircleOutlint',
  print: 'print',
  quote: 'quote',
  remove: 'remove',
  saveAlt: 'saveAlt',
  search: 'search',
  searchWhite: 'searchWhite',
  searchDarkKhaki: 'searchDarkKhaki',
  skipNext: 'skipNext',
  skipPrevious: 'skipPrevious',
  split: 'split',
  arrowCirclePrev: 'arrowCirclePrev',
  arrowCircleNext: 'arrowCircleNext',
  timer: 'timer',
  timerGray: 'timerGray',
  timerGreen: 'timerGreen',
  visibility: 'visibility',
  visibilityOff: 'visibilityOff',
  warning: 'warning',
  pdf: 'pdf',
  quoteLeft: 'quoteLeft',
  quoteRight: 'quoteRight',
  quoteLeftWhite: 'quoteLeftWhite',
  scrollDown: 'scrollDown',
};

export type IconName = keyof typeof iconList;

type Props = {
    iconName: IconName
};

const Icon : React.FC<Props> = ({ iconName }) => <div className={mapModifiers('a-icon', iconName)} />;

export default Icon;
