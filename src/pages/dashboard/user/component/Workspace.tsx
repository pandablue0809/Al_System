/**
 * @author Tahara Kazuki
 * @created 04/25/2024
 * @lastModified 04/26/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';

// import type about customize model
import { ChatMessage, BOT_HELLO, DEFAULT_TOPIC } from '../../../../store/slices/chatSlice';
import { SubmitKey } from '../../../../types/ConfigTypes';
import { ModelType } from '../../../../types/modelTypes';

import { useMobileScreen } from '../../../../utils/useWindowSize';
import { IconButton } from '../../../../components/common/iconButton/IconButton';
import { IoReturnUpBack } from 'react-icons/io5';
import { FiEdit2 } from 'react-icons/fi';
import { TfiExport } from 'react-icons/tfi';
import ChatInput from '../../../../components/common/input/ChatInput';

export const Workspace: React.FC = () => {
  const isMobileScreen = useMobileScreen();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex flex-col relative h-full'>
      {/* window-header */}
      <div className='py-[14px] px-[20px] border-b-[1px] border-[#bbbbbb] border-solid relative flex justify-between items-center'>
        {isMobileScreen && (
          <div className='inline-flex'>
            <div className='window-action-button'>
              <IconButton icon={<IoReturnUpBack />} bordered />
            </div>
          </div>
        )}
        <div className='max-w-[calc(100%-100px)] overflow-hidden text-center'>
          <div className='text-[20px] font-bold overflow-hidden text-ellipsis whitespace-nowrap block max-w-[50vw] cursor-pointer'>
            {DEFAULT_TOPIC}
          </div>
        </div>
        {/* window-actions */}
        <div className='inline-flex'>
          {!isMobileScreen && (
            <div className='window-action-button'>
              <IconButton icon={<FiEdit2 />} bordered onClick={() => {}} />
            </div>
          )}
          <div className='window-action-button'>
            <IconButton icon={<TfiExport />} bordered onClick={() => {}} />
          </div>
        </div>
      </div>
      {/* chat-wrapper */}
      <div className='flex flex-1 overflow-auto overflow-x-hidden relative'>
        {/* chat-body */}
        <div className='overflow-auto overflow-x-hidden p-[20px] pb-[40px] relative' ref={scrollRef}></div>
        {/* chat-input-panel */}
        <div className='relative w-full p-[20px] box-border'>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
