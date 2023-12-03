import React from 'react'
import './successPopup.css'

export default function SuccessPopup({ isFormSubmitted, setIsFormSubmitted }) {
  const handleCloseSuccessPopup = () => {
    setIsFormSubmitted(false);
  }
  return (
    <div className={`success-popup ${isFormSubmitted ? 'success-popup_active' : ''}`}>
      <div className='success-popup__container'>
        <div className='success-popup-info'>
          <h2 className='success-popup__title'>Данные успешно отправлены!</h2>
          <p className="success-popup__text">Мы перезвоним Вам в <br />
            ближайшее время</p>
        </div>
        <button className='success-popup__close-btn' onClick={() => handleCloseSuccessPopup()}>Закрыть</button>
      </div>
    </div>
  )
}
