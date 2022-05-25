import React from 'react'
import './Board.css'
import Tile from '../Tile'

const Board = ({ tiles, numTiles }) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles || tiles.length)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles || tiles.length)}, 1fr)`,
  }

  return (
    <div className='Board' style={gridConfig}>
      {tiles.map(tile =>
        <Tile {...tile} />
      )}
    </div>
  )
}

export default Board
