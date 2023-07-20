import React from 'react'
// import Button from '../components/Common/Button'
// import { useNavigate } from 'react-router-dom'
import character from '../images/coin-character.png'

function Errorpage() {

  // const navigate = useNavigate();

  // function backToHome(){
  //   navigate('/')
  // }

  return (
    <div className='errorPage'>
      <h1>
        Oppss!!
      </h1>
      <img src={character} alt='error character' className='errorCharacter'/>
      <h1>
        Something went wrong...
      </h1>
      <p>relax we are looking over the error</p>
    </div>
  )
}

export default Errorpage


