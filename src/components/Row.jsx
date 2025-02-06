import React from 'react'
import Square from './Square'

function Row(props) {

    const alphabets = "abcdefgh";
    let color1, color2;

    if (props.index % 2 == 0) {
        color1 = "white";
        color2 = "black";
    } else {
        color1 = "black";
        color2 = "white";
    }

    let squaresArray = []

    for (let j = 1; j <= 8; j++) {

        let currentColor = j % 2 === 0 ? color1 : color2;

        const num = j === 8 ? props.index : undefined;
        const alph = props.index === 8 ? alphabets[j - 1] : undefined;
        const position = alphabets[j - 1] + props.index;

        squaresArray.push(<Square key={position} position={position} color={currentColor} num={num} alph={alph} />)

    }

    return (
        <>{squaresArray}</>
    )
}
export default Row