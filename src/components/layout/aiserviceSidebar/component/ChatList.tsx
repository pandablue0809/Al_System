/**
 * @author Tahara Kazuki
 * @created 04/08/2024
 * @lastModified 04/16/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from '@hello-pangea/dnd';

import { useAppDispatch, useAppSelector } from '../../../../hooks/useReduxHooks';
import { selectSession, moveSession, deleteSession } from '../../../../store/slices/chatSlice';

import { Path } from '../../../../constants/configConstant';
import ChatConstant from '../../../../constants/chatConstant';

import { AiOutlineCloseCircle } from 'react-icons/ai';

type ChatItemProps = {
  onClick?: () => void;
  onDelete?: () => void;
  title: string;
  count: number;
  time: string;
  selected: boolean;
  id: number;
  index: number;
  narrow?: boolean;
};

export const ChatItem: React.FC<ChatItemProps> = ({ title, count, time, selected, id, index, narrow, onClick, onDelete }) => {
  const draggableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selected && draggableRef.current) {
      draggableRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth', inline: 'start' });
    }
  }, [selected]);

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <div
          className={`py-[10px] px-[14px] bg-gray-800 rounded-[10px] mb-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-colors cursor-pointer select-none border-[2px] border-solid border-transparent relative hover:bg-[#323232] ${selected && 'border-[#dedede]'}`}
          onClick={onClick}
          ref={(ele) => {
            draggableRef.current = ele;
            provided.innerRef(ele);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          title={`${title}\n${ChatConstant.ChatItem.ChatItemCount(count)}`}>
          {narrow ? (
            <div className='font-light text-white transition-all ease-in delay-300 p-[4px] flex flex-col justify-center'>
              <div className={``}>{/* <MaskAvatar mask={props.mask} /> */}</div>
              <div className='text-[24px] font-extrabold text-center text-white opacity-60'>{count}</div>
            </div>
          ) : (
            <>
              <div className='text-[14px] font-extrabold block w-[calc(100% - 15px)] overflow-hidden text-ellipsis whitespace-nowrap'>{title}</div>
              <div className='flex justify-between text-[#a6a6a6] text-[12px] mt-[8px]'>
                <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{ChatConstant.ChatItem.ChatItemCount(count)}</div>
                <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{time}</div>
              </div>
            </>
          )}

          <div
            className='absolute top-0 right-0 opacity-0 cursor-pointer transition-opacity ease-in-out duration-300 transform group-hover:opacity-50 group-hover:-translate-x-1 hover:opacity-100'
            onClickCapture={onDelete}>
            <AiOutlineCloseCircle />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export const ChatList = (props: { narrow?: boolean }) => {
  const { sessions, currentSessionIndex } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    moveSession(source.index, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='chat-list'>
        {(provided) => (
          <div className='' ref={provided.innerRef} {...provided.droppableProps}>
            {sessions.map((item, i) => (
              <ChatItem
                title={item.topic}
                time={new Date(item.lastUpdate).toLocaleString()}
                count={item.messages.length}
                key={item.id}
                id={item.id}
                index={i}
                selected={i === currentSessionIndex}
                onClick={() => {
                  navigate(Path.Chat);
                  selectSession(i);
                }}
                onDelete={async () => {
                  if (
                    !props.narrow
                    // || (await showConfirm(ChatConstant.Home.DeleteChat))
                  ) {
                    dispatch(deleteSession(i));
                  }
                }}
                narrow={props.narrow}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
