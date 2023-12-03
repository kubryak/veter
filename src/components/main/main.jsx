import React from 'react'
import './main.css'

export default function Main({ setIsOpened }) {
  return (
    <div className='main'>
      <h1 className='main__title'>Атмосферный квартал</h1>
      <button className='main__button' onClick={() => setIsOpened(true)}>Узнать подробности</button>
    </div>
  )
}
