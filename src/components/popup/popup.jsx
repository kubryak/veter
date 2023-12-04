import React, { useEffect, useState } from 'react'
import './popup.css'
import clouds from '../../images/popup__clouds.svg'
import right_cloud from '../../images/cloud-right.png'
import left_cloud from '../../images/cloud-left.png'

export default function Popup({ isOpened, setIsOpened, setIsFormSubmitted }) {
  const handleClosePopup = () => {
    setIsOpened(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      telephone: '',
      isAgreed: false,
    });
  };

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);


  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    isAgreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let inputValue = value;

    if (name === 'telephone') {
      // Форматируем и ограничиваем ввод для телефона
      inputValue = formatPhoneNumber(value);
    }

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsFormSubmitted(true);
    setIsOpened(false);
    resetForm();
  };

  const isFormValid = () => {
    return formData.name !== '' && formData.telephone.length === 16 && formData.isAgreed;
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Удаляем все нецифровые символы
    const digits = phoneNumber.replace(/\D/g, '');

    // Ограничиваем ввод 11 символами
    const limitedDigits = digits.substring(0, 11);

    // Форматируем введенный номер
    let formattedPhoneNumber = '+7';
    for (let i = 1; i < limitedDigits.length; i++) {
      if (i === 1) {
        formattedPhoneNumber += `-${limitedDigits[i]}`;
      } else if (i === 4) {
        formattedPhoneNumber += `-${limitedDigits[i]}`;
      } else if (i === 7) {
        formattedPhoneNumber += `-${limitedDigits[i]}`;
      } else if (i === 9) {
        formattedPhoneNumber += `-${limitedDigits[i]}`;
      } else {
        formattedPhoneNumber += limitedDigits[i];
      }
    }

    return formattedPhoneNumber;
  };

  return (
    <div className={`popup ${isOpened ? 'popup_active' : ''}`}>
      <div className='popup__container'>
        <button className='popup__close-btn' onClick={() => handleClosePopup()} />
        <div className='popup__clouds'>
          <p className='popup__clouds-text'>Ожидаются осадки в виде плюсов</p>
          <img className='popup__clouds-img' src={clouds} alt='Изображение облаков' />
        </div>
        <h2 className='popup__title'>Узнайте подробности</h2>
        <form className='popup__form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            className='popup__input'
            placeholder='Имя'
            value={formData.name}
            onChange={handleInputChange}
            minLength={2}
          />
          <input
            type='text'
            name='telephone'
            className='popup__input'
            placeholder='Телефон'
            value={formData.telephone}
            onChange={handleInputChange}
          />
          <button
            type='submit'
            className={`popup__submit-btn ${isFormValid() ? 'popup__submit-btn_type_active' : 'popup__submit-btn_type_disabled'}`}
            disabled={!isFormValid()}
          >
            Узнать подробности
          </button>
          <div className='popup__politics'>
            <input
              type='checkbox'
              id='politics'
              name='isAgreed'
              className='popup__checkbox'
              checked={formData.isAgreed}
              onChange={handleInputChange}
            />
            <label htmlFor='politics' className='popup__checkbox-label'>Нажимая кнопку, Вы соглашаетесь
              на обработку персональных данных.</label>
          </div>
        </form>
      </div>
      <img className={`popup__right-cloud ${isOpened ? 'popup__right-cloud_active' : ''}`} src={right_cloud} alt='Обалко расположенное справа' />
      <img className={`popup__left-cloud ${isOpened ? 'popup__left-cloud_active' : ''}`} src={left_cloud} alt='Обалко расположенное слева' />
    </div>
  )
}
