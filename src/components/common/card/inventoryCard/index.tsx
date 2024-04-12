import React, { useState } from 'react';

import AddCartButton from '../../button/AddCartButton';

import { IconButton, Tooltip } from '@mui/material';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { TiWarningOutline } from 'react-icons/ti';

export type InventoryCardProps = {
  url?: string;
  productId?: string;
  description?: string;
  purchasePrice?: number;
  sellingPrice?: number;
  tax?: number;
  inStock?: number;
  brand: string;
  productType?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLike?: boolean;
};

const InventoryCard: React.FC<InventoryCardProps> = ({
  url,
  productId,
  description,
  purchasePrice,
  sellingPrice,
  tax,
  inStock,
  brand,
  isNew,
  isBestSeller,
  isLike,
}) => {
  const [Like, setLike] = useState(isLike || false);

  const handleClick = () => {
    setLike(!Like);
  };

  return (
    <div className='relative p-3 w-80 bg-[#fff] flex flex-col rounded-lg text-gray-500 shadow-gray-400 shadow-md hover:translate-y-1 hover:shadow-lg items-center cursor-pointer transition-transform transition-colors duration-500 ease-in-out overflow-hidden'>
      <div className='w-40 h-36 overflow-hidden transition-transform hover:scale-110 duration-500'>
        <img src={url} alt='card' className='object-cover w-full h-full' />
      </div>
      <Tooltip title={description} arrow>
        <p className='mt-4 text-green-900 font-semibold text-center text-sm mb-1 mt-2 uppercase font-montserrat'>
          {description && description?.length > 60 ? description?.slice(0, 60).concat('...') : description}
        </p>
      </Tooltip>
      <div className='gap-5 p-3 text-xs'>
        <div className='absolute top-52 right-5 z-20'>
          <IconButton color='error' aria-label='add to shopping cart' onClick={handleClick}>
            {Like ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </IconButton>
        </div>
        <div className='mb-2'>
          <span className='text-md font-semibold'>Brand: </span>
          {brand}
        </div>
        <div className='flex flex-row justify-between'>
          <div>
            <span className='text-md font-semibold'>Item #: </span>
            {productId}
          </div>

          {inStock && inStock > 0 ? (
            <span className='text-md font-bold text-green-500'>In stock: {inStock} </span>
          ) : (
            <div className='flex flex-row text-md font-bold text-red-500 items-center'>
              <TiWarningOutline />
              <span className='ml-1'>Stock is empty</span>
            </div>
          )}
        </div>
        <p className='text-green-500 font-bold text-3xl pb-1 pt-3'>${sellingPrice}</p>
        <span>Purchase price is </span>
        <span className='text-md text-blue-500 font-semibold'>${purchasePrice}</span>
        <span> based on </span>
        <span className='text-md text-gray-500 font-semibold'>${tax}</span>
      </div>
      {isNew && (
        <div className='absolute top-5 left-0 transform -translate-x-1/2 translate-y-1/2 bg-red-500 text-white py-2 px-4 rotate-[-45deg] z-10 shadow shadow-sm shadow-gray-500'>
          <span className='px-12 ml-20 font-montserrat text-sm'>NEW</span>
        </div>
      )}
      {isBestSeller && (
        <div className='absolute top-5 left-1 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white py-2 px-4 rotate-[-45deg] z-10 shadow shadow-sm shadow-gray-500'>
          <span className='px-9 ml-20 font-montserrat text-[13px]'>BEST SELLER</span>
        </div>
      )}
      <AddCartButton inStock={inStock} />
    </div>
  );
};

export default InventoryCard;
