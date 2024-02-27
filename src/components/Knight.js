import React from 'react'
import { useDrag } from 'react-dnd'

function Knight() {
  const ItemTypes = {
    KNIGHT: 'knight'
  }
  const [{ isDragging }, drag] = useDrag({
      type:ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }); 
// console.log(isDragging);
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 40,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
  )
}

export default Knight