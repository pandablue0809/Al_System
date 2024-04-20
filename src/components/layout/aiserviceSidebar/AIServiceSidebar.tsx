/**
 * @author Tahara Kazuki
 * @created 04/08/2024
 * @lastModified 04/17/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { nextSession, deleteSession } from '../../../store/slices/chatSlice';
import { setConfig } from '../../../store/slices/configSlice';
// mui component
import { IconButton } from '@mui/material';
// import icon for button
import { IoSettingsOutline } from 'react-icons/io5';
import { GiArtificialHive } from 'react-icons/gi';
import { CgAdd } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgEditUnmask } from 'react-icons/cg';
//resposive
import { useMobileScreen } from '../../../utils/useWindowSize';
import { showToast } from '../../common/ui-lib/uiLib';
import { MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, Path } from '../../../constants/configConstant';
import ChatConstant from '../../../constants/chatConstant';

const ChatList = React.lazy(() => import('./component/ChatList').then((module) => ({ default: module.ChatList })));

const useHotKey = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey) {
        if (e.key === 'ArrowUp') {
          dispatch(nextSession(-1));
        } else if (e.key === 'ArrowDown') {
          dispatch(nextSession(1));
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });
};

const useDragSideBar = () => {
  const config = useAppSelector((state) => state.config);
  const limit = (x: number) => Math.min(MAX_SIDEBAR_WIDTH, x);
  const startX = useRef(0);
  const startDragWidth = useRef(config.sidebarWidth ?? 300);
  const lastUpdateTime = useRef(Date.now());
  const dispatch = useAppDispatch();

  const handleMouseMove = useRef((e: MouseEvent) => {
    if (Date.now() < lastUpdateTime.current + 50) {
      return;
    }
    lastUpdateTime.current = Date.now();
    const d = e.clientX - startX.current;
    const nextWidth = limit(startDragWidth.current + d);
    dispatch(setConfig({ ...config, sidebarWidth: nextWidth }));
  });

  const handleMouseUp = useRef(() => {
    startDragWidth.current = config.sidebarWidth ?? 300;
    window.removeEventListener('mousemove', handleMouseMove.current);
    window.removeEventListener('mouseup', handleMouseUp.current);
  });

  const onDragMouseDown = (e: MouseEvent) => {
    startX.current = e.clientX;

    window.addEventListener('mousemove', handleMouseMove.current);
    window.addEventListener('mouseup', handleMouseUp.current);
  };
  const isMobileScreen = useMobileScreen();
  const shouldNarrow = !isMobileScreen && config.sidebarWidth < MIN_SIDEBAR_WIDTH;

  useEffect(() => {
    const barWidth = shouldNarrow ? NARROW_SIDEBAR_WIDTH : limit(config.sidebarWidth ?? 300);
    const sideBarWidth = isMobileScreen ? '100vw' : `${barWidth}px`;
    document.documentElement.style.setProperty('--sidebar-width', sideBarWidth);
  }, [config.sidebarWidth, isMobileScreen, shouldNarrow]);

  return { onDragMouseDown, shouldNarrow };
};

export const AIServiceSideBar: React.FC = (props: { className?: string }) => {
  const { currentSessionIndex } = useAppSelector((state) => state.chat);
  const { dontShowMaskSplashScreen } = useAppSelector((state) => state.config);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // drag side bar
  const { onDragMouseDown, shouldNarrow } = useDragSideBar();

  useHotKey();

  return (
    <div
      className={`top-0 w-[var(--sidebar-width)] box-border p-[20px] bg-gray-600 flex flex-col shadow-inner drop-shadow-[-2px_0px_2px_0px_rgb(0, 0, 0, 0.05)] relative ${props.className}`}>
      <div className='relative py-[20px]'>
        <div className='text-[20px] font-bold ease-in-out delay-300'>ChatGPT Ultimate</div>
        <div className='text-[12px] font-normal ease-in-out delay-200'>Unlock The Ultimate Power of ChatGPT</div>
        <div className='absolute right-0 bottom-[18px]'>
          <GiArtificialHive />
        </div>
      </div>

      <div className='flex mb-[20px]'>
        <IconButton sx={{ flexGrow: 1, marginLeft: '10px' }} onClick={() => navigate(Path.NewChat, { state: { fromHome: true } })}>
          <CgEditUnmask />
        </IconButton>
        <IconButton sx={{ flexGrow: 1, marginLeft: '10px' }} onClick={() => showToast(ChatConstant.WIP)}>
          <IoSettingsOutline />
        </IconButton>
      </div>

      <div
        className='flex-1 overflow-auto overflow-x-hidden'
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            navigate(Path.Home);
          }
        }}>
        <ChatList narrow={shouldNarrow} />
      </div>

      <div className='flex flex-col-reverse items-center'>
        <div className='flex flex-col-reverse items-center'>
          <div className='mr-0 mt-4'>
            <IconButton
              onClick={async () => {
                dispatch(deleteSession(currentSessionIndex));
              }}>
              <AiOutlineCloseCircle />
            </IconButton>
          </div>
          <div className='mr-0 mt-4'>
            <Link to={Path.Settings}>
              <IconButton>
                <IoSettingsOutline />
              </IconButton>
            </Link>
          </div>
          <div className='mr-0 mt-4'>
            <Link to={Path.Settings}>
              <IconButton>
                <IoSettingsOutline />
              </IconButton>
            </Link>
          </div>
        </div>
        <div>
          <IconButton
            onClick={() => {
              if (dontShowMaskSplashScreen) {
                // dispatch(newSession());
                navigate(Path.Chat);
              } else {
                navigate(Path.NewChat);
              }
            }}>
            <CgAdd />
          </IconButton>
        </div>
      </div>

      <div
        className='w-[10px] absolute top-0 right-0 h-full bg-black cursor-e-resize opacity-0 transition-all ease-in-out delay-300 hover:opacity-20 active:opacity-20'
        onMouseDown={(e) => onDragMouseDown(e as any)}></div>
    </div>
  );
};
