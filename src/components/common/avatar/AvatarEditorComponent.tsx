import React, { useState, useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Modal, Avatar, Button } from '@mui/material';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import sotru from '../../../assets/images/logo/logo.png';

export type AvatarProps = {
  src?: string;
  onSetImage?: (newValue: string | null) => void;
};

const AvatarEditorComponent: React.FC<AvatarProps> = ({ src, onSetImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(src || null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [previewImage, setPreviewImage] = useState<string | null>(src || null);
  const [isHovered, setIsHovered] = useState(false);

  const editorRef = useRef<AvatarEditor>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsModalOpen(true);
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onSetImage && onSetImage(reader.result as string);
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
  };

  const handlePositionChange = (position: { x: number; y: number }) => {
    setPosition(position);
  };

  const handleSave = () => {
    setIsModalOpen(false);
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas() as HTMLCanvasElement | null;
      if (canvas) {
        const dataUrl = canvas.toDataURL();
        // Store the data URL in state
        setPreviewImage(dataUrl);
      } else {
        console.error('Canvas is not available.');
      }
    } else {
      console.error('Editor reference is not available.');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPreviewImage(null);
  };

  const handleSkip = () => {
    setPreviewImage(null);
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <input type='file' className='' accept='image/*' onChange={handleImageChange} ref={fileInputRef} style={{ display: 'none' }} />
      <Avatar
        src={previewImage || sotru}
        className='cursor-pointer'
        style={{ border: '1px solid #fff', transition: '0.9s' }}
        sx={{ width: 100, height: 100 }}
        onClick={handleAvatarClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {isHovered ? <LocalSeeOutlinedIcon sx={{ zIndex: 100 }} fontSize='medium' /> : previewImage ? '' : 'No image'}
      </Avatar>

      {image && (
        <Modal
          open={isModalOpen}
          sx={{
            display: 'flex',
            p: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-labelledby='parent-modal-title'
          aria-describedby='parent-modal-description'>
          <div className='flex w-[30rem] h-[32rem] border border-gray-700 rounded-lg outline-none items-center bg-gray-700 flex-col'>
            <HighlightOffIcon className='ml-[27rem] mt-2 mb-5 cursor-pointer' onClick={handleCancel} />
            <div className='flex flex-col gap-2 justify-center'>
              <AvatarEditor
                ref={editorRef}
                image={image}
                width={250}
                height={250}
                border={50}
                borderRadius={125}
                scale={scale}
                position={position}
                onPositionChange={handlePositionChange}
              />
              <div>
                <input className='w-full' type='range' min='1' max='2' step='0.01' value={scale} onChange={handleScaleChange} />
              </div>
            </div>
            <div className='flex flex-row w-full justify-around mt-3'>
              <Button variant='text' onClick={handleSkip}>
                Skip
              </Button>

              <div className='gap-2 flex flex-row'>
                <Button variant='text' onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant='contained' onClick={handleSave}>
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AvatarEditorComponent;
