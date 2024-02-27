import React from 'react'
import Knight from './Knight'
import BoardSquare from './BoardSquare'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Board({ knightPosition, setKnightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }
    function renderSquare(i, knightPosition) {
        const x = i % 8
        const y = Math.floor(i / 8)

        return (
            <div key={i} style={{ width: '12.5%', height: '12.5%' }} >
                <BoardSquare x={x} y={y} knightPosition={knightPosition} setKnightPosition={setKnightPosition}>
                    {renderPiece(x, y, knightPosition)}
                </BoardSquare>
            </div>
        )
    }
    function renderPiece(x, y, [knightX, knightY]) {
        if (x === knightX && y === knightY) {
          return <Knight />
        }
      }
    // function handleSquareClick(toX, toY) {
    //     // console.log(toX+" "+toY);
    //     if (canMoveKnight(toX, toY)) {
    //         setKnightPosition([toX, toY]);
    //     }
    // }
    // function canMoveKnight(toX, toY) {
    //     const [x, y] = knightPosition
    //     const dx = toX - x
    //     const dy = toY - y

    //     return (
    //         (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    //         (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    //     )
    // }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )
}

export default Board