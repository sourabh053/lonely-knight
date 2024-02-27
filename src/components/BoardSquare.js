import React from 'react'
import Square from './Square'
import { useDrop } from 'react-dnd'
import Overlay from './Overlay'

export default function BoardSquare({ x, y, knightPosition, setKnightPosition, children }) {
    const black = (x + y) % 2 === 1
    const ItemTypes = {
        KNIGHT: 'knight'
    }
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.KNIGHT,
        drop: () => setKnightPosition([x, y]),
        canDrop: () => canMoveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    }), [x, y])
    function canMoveKnight(toX, toY) {
        const [kx, ky] = knightPosition
        console.log(kx+" "+ky+" "+toX+" "+toY);
        const dx = toX - kx
        const dy = toY - ky

        return (
            (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2)
        )
    }
    // console.log(isOver);
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>)
}