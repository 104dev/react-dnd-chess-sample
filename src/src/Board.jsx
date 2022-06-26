import React from 'react'
import Square from './Square'
import Knight from './Knight'
import { canMoveKnight, moveKnight } from './Game'

//現状のRenderSquareはループ回数とコマのX軸、Y軸を渡す。
//ループ中にコマのX軸とY軸が一致したらKnightをレンダリングする。
//Squareコンポーネントはその位置情報をレンダリング時に知っておく必要はない。

/*
function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Square black={black}>{piece}</Square>
        </div>
    )
}
*/

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return <div onClick={() => handleSquareClick(x, y)} style={{ width: '12.5%', height: '12.5%' }}>{<Square black={black}>{piece}</Square>}</div>
}

/*
function handleSquareClick(toX, toY) {
    moveKnight(toX, toY)
}
*/
function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY)
    }
}

export default function Board({ knightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <div
            style={{
                width: '300px',
                height: '300px',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}
