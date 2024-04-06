import React, { useEffect, useRef, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// mui component
import { IconButton } from '@mui/material';
// import icon for button
import SettingsIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/settings.svg';
import ChatGptIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/chatgpt.svg';
import AddIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/add.svg';
import CloseIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/close.svg';
import MaskIcon from '../../../assets/images/dashboard/userdashboard/aiservice/sidebar/mask.svg';
//resposive
import { useMobileScreen } from '../../../utils/useWindowSize';
import { MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, Path } from '../../../constants/constant';

