
/*export function observe(receive) {
    const randPos = () => Math.floor(Math.random() * 8)
    setInterval(() => receive([randPos(), randPos()]), 500)
}*/

//クリックしたSquareにKnightを移動させることがゴール。
//1つの方法としてはSquareから直接Gameロジックを呼ぶ方法がある。
//しかしSquareにその位置情報を渡さなければならない。

//moveKnightを定義。コマを移動した際に呼び出す。
//移動先の座標を引数として取り、現在最初に初期値のknightPositionを書き換える。
//emitChangeを呼び出す

//初期値ではobserverはnullとなっている。

//observeメソッドには引き続きKnightPositionからレンダリングするコールバック関数を渡す。
//observe((knightPosition) =>
//ReactDOM.render(<Board knightPosition={knightPosition} />, root)
//)

//observerにコールバック関数を格納する。
//Stateを使わずともObserverに現在のKnightPositionが格納されている模様。

let knightPosition = [1, 7]
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

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}
