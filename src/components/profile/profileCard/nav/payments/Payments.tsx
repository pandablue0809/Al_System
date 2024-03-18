import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles-compiled.css';
import PaymentHistory from './PaymentHistory';

export type PersonalInfoFormValues = {
  birthday?: string;
  lastName: string;
  country?: string;
  website: string;
  city?: string;
  address2: string;
  nickName: string;
  address1: string;
  sex?: string;
  facebook: string;
  language?: string;
  linkedin: string;
  zipcode: string;
  firstName: string;
  twitter: string;
  phone: string;
  email: string;
};

const Payments = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    console.log(region, ' ', country);
  }, [region, country]);

  return (
    <div>
      <h3>Payment Method</h3>
      <div className='grid grid-cols-3 gap-5'>
        <Cards name='John Smith' number='5245 0017 2000 0164' expiry='10/20' cvc='737' />

        <Cards name='John Smith' number='4111 1111 1111 1111' expiry='10/20' cvc='737' />

        <Cards name='John Smith' number='3700 0000 0000 002' expiry='10/20' cvc='737' />

        <Cards name='John Smith' number='3600 666633 3344' expiry='10/20' cvc='737' />
      </div>
      <div className='mt-5'>
        <PaymentHistory />
      </div>
    </div>
  );
};

export default Payments;
