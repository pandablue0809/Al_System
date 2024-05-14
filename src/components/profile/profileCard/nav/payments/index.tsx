import React, { useState } from 'react';

import CreditCardForm from './CreditCardForm';
import card1 from '../../../../../assets/images/card/creditCard/1.png';
import card2 from '../../../../../assets/images/card/creditCard/2.png';
import card3 from '../../../../../assets/images/card/creditCard/3.png';
import card4 from '../../../../../assets/images/card/creditCard/4.png';
import card5 from '../../../../../assets/images/card/creditCard/5.png';
import card6 from '../../../../../assets/images/card/creditCard/6.png';

import { Modal, Button } from '@mui/material';

import { IoIosSave } from 'react-icons/io';
import { MdOutlineAddCard } from 'react-icons/md';
import { TiCancelOutline } from 'react-icons/ti';

const Payments: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <p className='font-bold text-xl text-white'>My profile</p>
      <div className='grid grid-cols-2 gap-5 my-3'>
        <div className='bg-card-back1' />
        <div className='bg-card-back2' />
        <img src={card1} className='rounded-xl w-72' />
        <img src={card5} className='rounded-xl w-72' />
        <img src={card2} className='rounded-xl w-72' />
        <img src={card4} className='rounded-xl w-72' />
        <img src={card6} className='rounded-xl w-72' />
        <img src={card3} className='rounded-xl w-72' />
      </div>
      <Button
        variant='outlined'
        startIcon={<MdOutlineAddCard />}
        sx={{ backgroundColor: 'green', color: 'white', border: 'none' }}
        className='flex w-72 ml-40'
        onClick={handleClick}>
        Add Card
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        sx={{
          display: 'flex',
          p: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'>
        <div className='bg-[#333] md:w-[30%] w-[60%] p-16 rounded-xl flex justify-center flex-col'>
          <CreditCardForm />
          <div className='flex justify-center flex-row gap-4 mt-5'>
            <Button
              className='flex w-40'
              sx={{ backgroundColor: 'red', color: 'white', border: 'none' }}
              variant='contained'
              startIcon={<TiCancelOutline />}
              onClick={handleModalClose}>
              Cancel
            </Button>
            <Button
              className='flex w-40'
              sx={{ backgroundColor: 'green', color: 'white', border: 'none' }}
              variant='contained'
              startIcon={<IoIosSave />}
              onClick={handleModalClose}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Payments;
