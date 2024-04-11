import React, { useState, ChangeEvent } from 'react';
import './CreditCardForm.css';

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let value = e.target.value;
    if (name === 'number') {
      if (value.length > 20) return;
      value = value.replace(/[^\d]/g, '');
      value = value.replace(/(.{4})/g, '$1 ');
      setCardNumber(value);
    } else if (name === 'expiry') {
      if (value.length > 5) return;
      else if (value.length === 5) {
        setExpiry(value);
        return;
      }
      value = value.replace(/[^\d]/g, '');
      value = value.replace(/(.{2})/g, '$1/');
      setExpiry(value);
    } else if (name === 'cvc') {
      setCvc(value);
    }
  };

  return (
    <div className='credit-card-container rounded-xl w-full'>
      <div className='credit-card bg-card-back3'>
        <div className='card-front'>
          <div className='card-brand'>VISA</div>
          <div className='card-chip bg-chip'></div>
          <div className='card-number mt-3'>{cardNumber ? cardNumber : '____ ____ ____ ____'}</div>
          <div className='card-info'>
            <div className='card-holder'>
              <span className='card-label'>Card Holder</span>
              <span>Alexandru steu</span>
            </div>
            <div className='card-expiry'>
              <span className='card-label'>Expires</span>
              <span>{expiry ? expiry : 'MM/YY'}</span>
            </div>
          </div>
        </div>
        <div className='card-back'>
          <div className='card-cvc'>{cvc ? cvc : 'CVC'}</div>
        </div>
      </div>
      <form>
        <input type='tel' name='number' placeholder='Card Number' value={cardNumber} onChange={handleInputChange} />
        <input type='tel' name='expiry' placeholder='MM/YY Expiry' value={expiry} onChange={handleInputChange} />
        <input type='tel' name='cvc' placeholder='CVC' value={cvc} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default CreditCardForm;
