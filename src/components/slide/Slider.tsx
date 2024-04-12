import React from 'react';

export type SliderProps = {
  title?: string;
  titleHighlight?: string;
  content?: string;
  btnTitle?: string;
  url?: string;
  index?: number;
};

const Slider: React.FC<SliderProps> = ({ title, titleHighlight, content, btnTitle, url, index }) => {
  return (
    <li className={`${index === 1 ? 'current' : ''} `}>
      <article className='p-8'>
        <h3 className='text-6xl font-normal my-2'>
          {title} <em>{titleHighlight}</em>
        </h3>
        <p>{content}</p>
        <a href={url} className='sliderClip btn btn_3'>
          {btnTitle}
        </a>
      </article>
    </li>
  );
};

export default Slider;
