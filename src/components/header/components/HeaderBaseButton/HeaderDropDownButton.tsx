import React, { useCallback, useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export type HeaderDropDownMenuItem = {
  title: string;
  pathname?: string;
  subMenus?: HeaderDropDownMenuItem[];
};

type HeaderDropDownButtonBasicData = {
  onClick?: (state: string) => void;
};

type HeaderDropDownButtonData = HeaderDropDownMenuItem & HeaderDropDownButtonBasicData;

export const HeaderDropDownButton: React.FC<HeaderDropDownButtonData> = ({ title, subMenus, onClick }) => {
  const [menuShowingDropdown, setMenuShowingDropdown] = useState<null | string>('');
  const [animateActive, setAnimateActive] = useState(false);
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(title);
    setAnimateActive(true);
  }, [title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown('');
    setAnimateActive(false);
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => {
    return (
      <div key={subMenuItem.title} className='flex flex-col w-full items-start transition ease-in-out duration-300'>
        <button
          className='text-white hover:text-success text-sm sm:text-base font-sans select-none bg-transparent mt-2 transition ease-in-out duration-300'
          onClick={() => {
            if (onClick) {
              onClick(subMenuItem.title);
            }
            return;
          }}>
          {subMenuItem.title}
        </button>
        <div className='w-full h-[1px] bg-white align-bottom px-1 py-0 my-2'></div>
      </div>
    );
  });

  return (
    <div className='relative box-border flex-row h-full'>
      <button
        className='flex flex-row text-base sm:text-xl hover:text-success bg-transparent select-none font-sans tracking-wide font-semibold transition ease-in-out duration-300 items-center relative'
        id={`menuItem-${title}`}
        ref={buttonRef}
        onMouseLeave={() => {
          closeSubMenu();
        }}
        onMouseEnter={() => {
          if (subMenus) {
            showSubMenu();
            return;
          }
        }}>
        <span className='flex'>{title}</span>
        <MdOutlineKeyboardArrowDown className={`flex mt-1 ml-1 ${animateActive ? 'animate-bounce' : ''}`} />
      </button>
      {menuShowingDropdown === title && (
        <div
          className='w-44 flex flex-col pt-4 pb-8 px-8 rounded-lg transition ease-in-out duration-300 shadow-xl absolute z-10'
          style={{ backgroundColor: '#2b2c40' }}
          onMouseLeave={() => {
            closeSubMenu();
          }}
          onMouseEnter={() => {
            showSubMenu();
          }}>
          {subMenusNodes}
        </div>
      )}
    </div>
  );
};
