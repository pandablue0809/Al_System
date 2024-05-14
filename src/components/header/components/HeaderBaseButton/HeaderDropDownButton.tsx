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
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(title);
  }, [title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown('');
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => {
    return (
      <div key={subMenuItem.title} className='flex flex-col w-full items-start transition ease-in-out duration-300'>
        <button
          className='text-white hover:text-[#696CFF] transition duration-1000 delay-100 px-2.5 py-2.5 text-center inline-flex items-center'
          onClick={() => {
            if (onClick) {
              if (subMenuItem.pathname) {
                onClick(subMenuItem?.pathname);
              }
            }
            return;
          }}>
          {subMenuItem.title}
        </button>
      </div>
    );
  });

  return (
    <div className='relative box-border flex-row h-full'>
      <button
        className='text-white hover:text-[#696CFF] transition duration-1000 delay-100 px-2.5 py-2.5 text-center inline-flex items-center relative'
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
        <MdOutlineKeyboardArrowDown className={`flex mt-[1px] ml-[6px]`} />
      </button>
      {menuShowingDropdown === title && (
        <div
          className='w-max flex flex-col drop-shadow-md pt-4 pb-8 px-8 rounded-lg transition ease-in-out duration-300 shadow-xl absolute z-10'
          style={{ backgroundImage: 'linear-gradient(123deg, #4b4d63, rgba(19, 24, 32, 1))' }}
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
