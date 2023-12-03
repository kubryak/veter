import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Застройщик ООО “СЗ СУ1-ЗАТОН”. Проектная декларация размещена на сайте
        <a className='footer__link' target='_blank' href='https://xn--80az8a.xn--d1aqf.xn--p1ai/' rel="noreferrer"> наш.дом.рф</a>
        <br />
        <a className='footer__link' target='_blank' href="#" rel="noreferrer">Политика конфиденциальности</a>
      </p>
    </footer>
  )
}
