import React from 'react';
import { notification } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, StopFilled } from '@ant-design/icons';
import { ArgsProps } from 'antd/lib/notification';

type NotificationProps = ArgsProps;

const openSuccessNotification = (config: NotificationProps): void => {
  notification.success({
    ...config,
    icon: (
      <div className={`${config.description ? 'text-[3rem] leading-8' : 'text-[2rem] leading-8'}`}>
        <CheckCircleFilled className='success-icon' />
      </div>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className='description'>{config.description}</div> : <div className='mt-[-0.75rem]' />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openInfoNotification = (config: NotificationProps): void => {
  notification.info({
    ...config,
    icon: (
      <div className={`${config.description ? 'text-[3rem] leading-8' : 'text-[2rem] leading-8'}`}>
        <InfoCircleFilled className='info-icon' />
      </div>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className='description'>{config.description}</div> : <div className='mt-[-0.75rem]' />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openWarningNotification = (config: NotificationProps): void => {
  notification.warning({
    ...config,
    icon: (
      <div className={`${config.description ? 'text-[3rem] leading-8' : 'text-[2rem] leading-8'}`}>
        <ExclamationCircleFilled className='warning-icon' />
      </div>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className='description'>{config.description}</div> : <div className='mt-[-0.75rem]' />,
    className: config.description ? '' : 'notification-without-description',
  });
};

const openErrorNotification = (config: NotificationProps): void => {
  notification.error({
    ...config,
    icon: (
      <div className={`${config.description ? 'text-[3rem] leading-8' : 'text-[2rem] leading-8'}`}>
        <StopFilled className='error-icon' />
      </div>
    ),
    message: <div className={`title ${!config.description && `title-only`}`}>{config.message}</div>,
    description: config.description ? <div className='description'>{config.description}</div> : <div className='mt-[-0.75rem]' />,
    className: config.description ? '' : 'notification-without-description',
  });
};

export const notificationController = {
  success: openSuccessNotification,
  info: openInfoNotification,
  warning: openWarningNotification,
  error: openErrorNotification,
};
