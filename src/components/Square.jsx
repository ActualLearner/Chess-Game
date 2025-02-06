import React from 'react'

function Square(props) {
    return (
        <div id={`${props.position}`} className={`square ${props.position} ${props.color} text-black text-sm`}>
            {props.num && <p className='num'>{props.num}</p>}
            {props.alph && <p className='alph'>{props.alph}</p>}
        </div>
    )
}

export default Square