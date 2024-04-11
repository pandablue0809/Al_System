import React, { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { FaCartPlus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

export type AddCartButtonProps = {
  inStock?: number;
};

const AddCartButton: React.FC<AddCartButtonProps> = ({ inStock }) => {
  const [cartAmount, setCartAmount] = useState(0);

  const increaseCartAmount = () => {
    if (inStock && inStock > cartAmount) {
      setCartAmount((prevAmount) => prevAmount + 1);
    } else {
      toast.warning("You can't increase the quantity of products in your cart");
    }
  };

  const decreaseCartAmount = () => {
    if (cartAmount > 0) {
      setCartAmount((prevAmount) => prevAmount - 1);
    } else {
      toast.warning("You can't decrease the quantity!");
    }
  };

  const handleClick = () => {
    if (cartAmount === 0) {
      toast.warning('It is not permitted to add to the cart.');
    }
  };

  return (
    <div className='flex flex-row gap-6 items-center'>
      <div className='flex flex-row gap-1 bg-gray-100 rounded-full px-5'>
        <IconButton sx={{ color: '#3f83f8' }} size='small' onClick={decreaseCartAmount}>
          <FaMinus />
        </IconButton>
        <div className='p-1 px-4 font-bold text-center flex-grow text-[#3f83f8]'>{cartAmount}</div>
        <IconButton sx={{ color: '#3f83f8' }} size='small' onClick={increaseCartAmount}>
          <FaPlus />
        </IconButton>
      </div>
      <IconButton sx={{ color: '#3f83f8' }} size='medium' onClick={handleClick}>
        <FaCartPlus />
      </IconButton>
    </div>
  );
};

export default AddCartButton;
