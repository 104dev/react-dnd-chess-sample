import React from 'react';
import ReactDOM from 'react-dom'
import Board from './Board'
import { observe } from './Game'

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
)

//observe呼び出し時に引数として関数を渡す。
//その関数は引数knightPositionを受け取ってボードのレンダリングを行う関数である。
//その関数はsetInterval()内で実行され、呼び出し時にはランダムに2つの座標を与える。

//export function observe(receive) {
//  const randPos = () => Math.floor(Math.random() * 8)
//  setInterval(() => receive([randPos(), randPos()]), 500)
//}