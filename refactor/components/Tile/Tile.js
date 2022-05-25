import React from 'react'

import './Tile.css'

const Tile = ({ 
  id,
  color,
  selected,
  matched,
  svg = () => null,
  handleTileClicked = () => null,
}) => {
  const isSelectedOrMatched = selected || matched;
  const style = isSelectedOrMatched ? { 'backgroundColor': color } : null;
  const Component = svg;

  return (
    <div
      className='Tile'
      style={style}
      onClick={() => handleTileClicked(id, color)}
    >
      {isSelectedOrMatched ? <Component /> : null}
    </div>
  )
}

export default Tile
