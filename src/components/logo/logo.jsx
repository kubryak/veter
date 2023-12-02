import React from 'react'
import vector_left from '../../images/vector-left.svg'
import vector_right from '../../images/vector-right.svg'
import logo from '../../images/logo.svg'
import './logo.css'

export default function Logo() {
  return (
    <div className="container fade-in-background">
      <img className="fade-in-left" src={vector_left} alt="Изображение левого вектора" />
      <img className="fade-in-right" src={vector_right} alt="Изображение правого вектора" />
      <img className='logo' src={logo} alt="Логотип компании Veter" />
    </div>
  )
}
