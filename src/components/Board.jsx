import React, { useState } from 'react'
import Row from './Row'
import Piece from './Piece';
import { whiteLinks } from '../svgLinks';

function Board() {

  const [boardState, setBoardState] = useState({
    a1: { type: "king", svg: whiteLinks.kingLink },
    a2: { type: "rook", svg: whiteLinks.rookLink }
  })

  let rowsArray = [];

  for (let i = 1; i <= 8; i++) {
    rowsArray.push(<Row key={i} index={i} />)
  }
  //////////////////////


  let pieceArray = [];

  Object.entries(boardState).forEach(([key, value]) => {
    pieceArray.push(<Piece key={key} svg={value.svg} />);
  })


  return (
    <>
      <div id='board' className='grid grid-cols-8 grid-rows-8 bg-white border-black border rounded-lg'>
        {rowsArray}
      </div>
      <div id='pieces'>
        {pieceArray}
      </div>
    </>
  )
}

export default Board