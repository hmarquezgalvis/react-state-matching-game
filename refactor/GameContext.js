import React from 'react';

const initial = {
  numTiles: 36,
  playing: false,
  handleNumTileChange: () => {},
  startPlaying: () => {},
};
const GameContext = React.createContext(initial);

export default GameContext;