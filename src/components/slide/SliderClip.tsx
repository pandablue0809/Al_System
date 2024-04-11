import React, { useEffect, useState } from 'react';

import Slider from './Slider';
import SliderContent from './SliderContent';

const SliderClip: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [timeTrans, setTimeTrans] = useState(4000);
  let sliderInterval: NodeJS.Timeout | null = null;

  useEffect(() => {
    setTimeTrans(4000);
    const slider = document.querySelector('.slider');
    const slides = slider?.querySelectorAll('li') as NodeListOf<HTMLElement>;
    const navDots = slider?.querySelectorAll('aside a') as NodeListOf<HTMLAnchorElement>;

    if (!slider || !slides || !navDots) return;

    const totalSlides = slides.length;

    const changeSlide = (index: number) => {
      navDots.forEach((dot) => dot.classList.remove('current_dot'));
      slides.forEach((slide) => slide.classList.remove('prev', 'current'));

      const getAllPrev = (value: number) => value < index;
      const prevElements = Array.from({ length: totalSlides }, (_, i) => i).filter(getAllPrev);

      prevElements.forEach((indexPrevEle) => slides[indexPrevEle].classList.add('prev'));

      slides[index].classList.add('current');
      navDots[index].classList.add('current_dot');
    };

    const handleDotClick = (index: number) => {
      setCurrent(index);
      changeSlide(index);
    };

    const handleMouseEnter = () => setAutoPlay(false);
    const handleMouseLeave = () => setAutoPlay(true);

    const autoplay = () => {
      if (autoPlay) {
        setCurrent((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
        changeSlide(current);
      }
    };

    navDots.forEach((dot, index) => dot.addEventListener('click', () => handleDotClick(index)));
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    sliderInterval = setInterval(autoplay, timeTrans);

    return () => {
      navDots.forEach((dot, index) => dot.removeEventListener('click', () => handleDotClick(index)));
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      if (sliderInterval) clearInterval(sliderInterval);
    };
  }, [autoPlay, current, timeTrans]);

  return (
    <header>
      <section className='slider'>
        {SliderContent.map((item, index) => (
          <Slider key={index} index={index} {...item} />
        ))}
        <ul>
          <aside>
            <a className='sliderClip' href='#'></a>
            <a className='sliderClip' href='#'></a>
            <a className='sliderClip' href='#'></a>
          </aside>
        </ul>
      </section>
      <a href='#services' className='sliderClip cs-down'></a>
    </header>
  );
};

export default SliderClip;
