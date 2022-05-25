import React from 'react'
import useHover from '../../hooks'

import './TileSelector.css'

const TileSelector = ({ numTiles, handleNumTileChange }) => {
  const [ref, hovered] = useHover();

  const dropdown = (
        hovered && <div className='tileSelectorContent'>
          {[4,16,36].map(num => (
            <div key={num} className='number' onClick={() => handleNumTileChange(num)}>
              {num}
            </div>
          ))}
        </div>
  )

 return (
   <div className='tileSelector'>
     <div>Number of Tiles</div>
     <div className='tileSelectorDropdown' ref={ref}>
       {numTiles}
       {dropdown}
     </div>
   </div>
 )
}

export default TileSelector
