import React from 'react'
import './style.css'

function Button({text, outline, handleClick}) {
  return (
    <div>
        <button className={outline?'borderedBtn':'btn'} onClick={()=>{handleClick()}}>{text}</button>
    </div>
  )
}

export default Button