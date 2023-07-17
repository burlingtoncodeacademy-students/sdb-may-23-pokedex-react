import React, { useEffect, useState } from 'react'

function Input({ setPoke }) {
    
    function handleClick(e) {
      const value = e.target.previousSibling.value
      setPoke(value)
      e.target.previousSibling.value = ""
    }

  return (
    <div>
        <input type="text" placeholder='Enter pokemon name'/>
        <button onClick={handleClick}>Catch!</button>
    </div>
  )
}

export default Input