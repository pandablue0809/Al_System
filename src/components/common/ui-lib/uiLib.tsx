import React, { useState, useEffect, HTMLProps } from 'react';
import { createRoot } from 'react-dom/client';
//import mui iconbutton
import { IconButton } from '@mui/material';
// import image for image button
import LoadingIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/three-dots.svg';
import CloseIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/close.svg';
import EyeIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/eye.svg';
import EyeOffIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/eye-off.svg';
import DownIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/down.svg';
import ConfirmIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/confirm.svg';
import CancelIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/cancel.svg';
import MaxIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/max.svg';
import MinIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/min.svg';

export type ToastProps = {
  content: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  onClose?: () => void;
};

export const Popover = (props: { children: JSX.Element; content: JSX.Element; open?: boolean; onClose?: () => void }) => {
  return (
    <div className='relative z-[2]'>
      {props.children}
      {props.open && (
        <div className='absolute popover-content right-0 top-[calc(100% + 10px)]'>
          <div className='fixed top-0 left-0 w-screen h-screen' onClick={props.onClose} />
          {props.content}
        </div>
      )}
    </div>
  );
};

export const Card = (props: { children: JSX.Element[]; className?: string }) => {
  return (
    <div className={`bg-white rounded-[10px] p-[10px] ${props.className}`} style={{ boxShadow: '0px 2px 4px 0px rgb(0, 0, 0, 0.05)' }}>
      {props.children}
    </div>
  );
};

export const Toast = (props: ToastProps) => {
  return (
    <div className='fixed bottom-[5vh] left-0 w-screen flex justify-center pointer-events-none'>
      <div
        className='max-w-[80vw] break-all text-[14px] bg-white border-[1px] border-solid border-[#dedede] text-black py-[10px] px-[20px] rounded-[50px] mb-[20px] flex items-center pointer-events-auto'
        style={{ boxShadow: '0px 2px 4px 0px rgb(0, 0, 0, 0.05)' }}>
        <span>{props.content}</span>
        {props.action && (
          <button
            onClick={() => {
              props.action?.onClick?.();
              props.onClose?.();
            }}
            className='pl-[20px] text-[#11ad80] opacity-80 border-none bg-none cursor-pointer hover:opacity-100'>
            {props.action.text}
          </button>
        )}
      </div>
    </div>
  );
};

export const showToast = (content: string, action?: ToastProps['action'], delay = 3000) => {
  const div = document.createElement('div');
  div.className = 'show';
  document.body.appendChild(div);

  const root = createRoot(div);
  const close = () => {
    div.classList.add('hide');

    setTimeout(() => {
      root.unmount();
      div.remove();
    }, 300);
  };

  setTimeout(() => {
    close();
  }, delay);

  root.render(<Toast content={content} action={action} onClose={close} />);
};