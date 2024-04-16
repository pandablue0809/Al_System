import React, { useState, useEffect } from 'react';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

type ImageSliderProps = {
  children: React.ReactNode[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState<number | undefined>();

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000) as unknown as number,
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID !== undefined) {
      if (timeID > 0) {
        clearTimeout(timeID);
        setSlideDone(false);
      }
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className='relative w-full p-0 overflow-hidden flex flex-row flex-nowrap bg-transparent justify-start items-center'
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}>
      {children.map((item, index) => {
        return (
          <div
            className={`box-border min-w-full h-auto overflow-hidden object-cover translate-x-0 ease-in duration-1000 slider__item-active-${activeIndex + 1}`}
            key={index}>
            {item}
          </div>
        );
      })}
      <div className='absolute bottom-[10vh] left-1/2' style={{ transform: 'translateX(-50%)' }}>
        {children.map((item, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? 'relative w-2 h-2 rounded-full outline-none border-[1px] border-solid border-gray-300 my-0 mx-0.5 bg-white'
                : 'relative w-2 h-2 rounded-[50%] outline-none border-[1px] border-solid border-gray-300 my-0 mt-0.5 transition-color ease-in duration-1000'
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
      <button
        className='absolute right-0'
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}>
        <NavigateNextOutlinedIcon />
      </button>
      <button
        className='absolute left-0'
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}>
        <ArrowBackIosOutlinedIcon />
      </button>
    </div>
  );
};
export default ImageSlider;
