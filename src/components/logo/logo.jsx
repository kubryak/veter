import React, { useEffect, useState } from 'react'
import vector_left from '../../images/vector-left.svg'
import vector_right from '../../images/vector-right.svg'
import logo from '../../images/logo.svg'
import logo_small from '../../images/logo-375.svg';
import './logo.css'

export default function Logo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="container ">
      <img className="fade-in-left" src={vector_left} alt="Изображение левого вектора" />
      <img className="fade-in-right" src={vector_right} alt="Изображение правого вектора" />
      <img className='logo' src={windowWidth < 376 ? logo_small : logo} alt="Логотип компании Veter" />
    </div>
  )
}
