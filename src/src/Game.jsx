export function observe(receive) {
    const randPos = () => Math.floor(Math.random() * 8)
    setInterval(() => receive([randPos(), randPos()]), 500)
}

//クリックしたSquareにKnightを移動させることがゴール。
//1つの方法としてはSquareから直接Gameロジックを呼ぶ方法がある。
//しかしSquareにその位置情報を渡さなければならない。


let knightPosition = [0, 0]
let observer = null

function emitChange() {
  observer(knightPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}