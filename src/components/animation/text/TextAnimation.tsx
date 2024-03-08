import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';
import SplitTextToChars from './SplitTextToChars';

const TextStyled = styled.p`
  font-size: 3rem;
  font-family: Poppins;
  font-weight: 800;
  margin: 0;
  color: white;
  lineheight: 57.6;
  position: absolute;
  letterspacing: 5%;
  display: flex;
`;

const TextAnimation: React.FC = () => {
  const wavyTextRef = useRef(null);

  useEffect(() => {
    if (!wavyTextRef.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);

    gsap.set(wavyTextRef.current, { perspective: 400 });

    gsap.from(chars, {
      duration: 0.2,
      opacity: 0,
      scale: 1,
      delay: 2,
      y: -40,
      rotationX: -90,
      transformOrigin: '0% 50% -50',
      ease: 'inOut',
      stagger: 0.025,
    });
  }, []);

  return (
    <div className='text-center bg-transparent relative w-full h-16 m-0 p-0 justify-center align-middle' style={{ fontFamily: 'Poppins' }}>
      <TextStyled ref={wavyTextRef}>ride the waaaaaaaave</TextStyled>
    </div>
  );
};

export default TextAnimation;
