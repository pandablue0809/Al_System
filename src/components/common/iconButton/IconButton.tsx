import React from 'react';

type IconButtonProps = {
  onClick?: () => void;
  icon?: JSX.Element;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon, text, bordered, shadow, className, title, disabled, tabIndex, autoFocus, onClick }) => {
  return (
    <button
      className={`bg-[#1e1e1e] rounded-[10px] flex items-center justify-center p-[10px] cursor-pointer transition-all delay-300 ease-in-out overflow-hidden select-none outline-none border text-[#bbbbbb] disabled:cursor-not-allowed disabled:opacity-50 hover:border-[#1d93ab] focus:border-[#1d93ab] ${bordered && 'border-[#ffffff31] border-solid border-[1px]'} ${shadow && 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]'} ${className ?? ''}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
      role='button'
      tabIndex={tabIndex}
      autoFocus={autoFocus}>
      {icon && <div className='w-[16px] h-[16px] flex justify-center items-center'>{icon}</div>}
      {text && <div className='icon-button-text'>{text}</div>}
    </button>
  );
};
