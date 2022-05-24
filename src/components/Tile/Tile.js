import React from 'react'

import './Tile.css'

const Tile = ({ color, selected, matched, svg = () => null }) => {
  const isSelectedOrMatched = selected || matched;
  const style = isSelectedOrMatched ? { 'backgroundColor': color } : null;
  const Component = svg;

  return (
    <div
      className='Tile'
      style={style}
    >
      {isSelectedOrMatched ? <Component /> : null}
    </div>
  )
}

export default Tile
