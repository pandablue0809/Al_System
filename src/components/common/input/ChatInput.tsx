import React, { ChangeEvent, useEffect, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { MdOutlineSend } from 'react-icons/md';
import { MdKeyboardVoice } from 'react-icons/md';

export type ChatInputProps = {
  value?: string;
  onSendMsg?: (newValue: string) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ChatInput: React.FC<ChatInputProps> = ({ value, onSendMsg }) => {
  const [open, setOpen] = React.useState(false);
  const [chatContent, setChatContent] = useState(value || '');
  const [isEmpty, setIsEmpty] = useState(true);
  const [rows, setRows] = useState<number>(1);
  const [isKeyDownEnter, setIsKeyDownEnter] = useState(false);
  const [inputAudios, setInputAudios] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    chatContent == '' ? setIsEmpty(true) : setIsEmpty(false);
  }, [chatContent, rows]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    const length = newContent.split('\n').length;
    const lines = length + newContent.split('\n')[length - 1].length / 90;
    if (!isKeyDownEnter) {
      setChatContent(newContent);
      setRows(lines);
    } else if (!isEmpty) {
      onSendMsg && onSendMsg(chatContent);
      setChatContent('');
      setRows(1);
    }
  };

  const getConnectedDevices = async (type: 'audioinput' | 'audiooutput' | 'videoinput'): Promise<MediaDeviceInfo[]> => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === type);
  };

  const getInputAudios = async () => {
    const audios = await getConnectedDevices('audioinput');
    if (audios.length !== 0) {
      setInputAudios(audios);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (inputAudios?.length !== 0) {
      console.log('this is voice device=====>', inputAudios[0]?.deviceId);
    } else {
      console.log('this is error');
    }
  }, [inputAudios]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setIsKeyDownEnter(false);
    if (event.key === 'Backspace' && rows > 1) {
      const lines = event.currentTarget.value.split('\n').length;
      setRows(lines - 1);
    } else if (event.key === 'Enter' && !event.shiftKey) {
      setIsKeyDownEnter(true);
    }
  };

  const handleClick = () => {
    onSendMsg && onSendMsg(chatContent);
    setChatContent('');
    setRows(1);
  };

  return (
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 content-center pt-2 md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-[60%]'>
      <div className='mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full'>
        <div className='relative flex h-full flex-1 flex-col'>
          <div className='flex w-full items-center'>
            <div className='overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border text-white rounded-2xl bg-token-main-surface-primary border-token-border-medium'>
              <textarea
                id='user-input'
                name='user_input'
                tabIndex={0}
                value={chatContent}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                rows={rows}
                placeholder='Message ChatGPT…'
                className='rounded-2xl m-0 resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-32 md:py-3.5 max-h-36 placeholder-white/50 pl-3 md:pl-4 '></textarea>
              {!!chatContent ? (
                <button
                  disabled={isEmpty}
                  onClick={handleClick}
                  className='absolute bottom-1.5 right-2 rounded-lg hover:bg-primary py-0.5 px-1 text-white transition-colors disabled:bg-inherit  disabled:text-gray-400 disabled:opacity-10  dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3'
                  data-testid='send-button'>
                  <MdOutlineSend className='text-[20px] transition-opacity delay-200 ease-in-out' />
                </button>
              ) : (
                <div>
                  <button
                    color='white'
                    className='md:bottom-3 bottom-1.5 right-3 text-lg p-1 rounded-lg hover:bg-primary absolute py-0.5 disabled:bg-inherit  disabled:text-gray-400 disabled:opacity-10'
                    onClick={getInputAudios}>
                    <MdKeyboardVoice className='text-[22px] transition-all delay-200 ease-in-out' />
                  </button>
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby='alert-dialog-slide-description'>
                    <DialogTitle>{"Can't find out connected Microphone"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id='alert-dialog-slide-description'>
                      There are no devices connected. Go ahead and connect your devices
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
