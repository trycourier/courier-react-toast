import React from 'react';

import {
  Toast, ToastProvider, useToast,
} from '..';
import { Button } from './styled';


export default {
  title: 'Example/Toast',
  component: Toast,
  argTypes:{
    position: {
      control: {
        type:'select',
        options:['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      },
    },
    hideProgressBar: {
      control: {
        type:'radio',
        options:[true, false],
      },
    },
    transition: {
      control: {
        type: 'select',
        options: ['slide', 'zoom', 'bounce'],
      },
    },
  },
  args: {
    position: 'top-right', hideProgressBar: true, transition: 'slide',
  },
};

function WrappedComponent() {
  const [ toast ] = useToast();
  const notification = {
    title: 'Snowman529 went live!',
    body: '14 seconds ago',
    icon: 'https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1610653848~hmac=19da6d95f62d8cd2c7122a66fd03af0c',
    clickAction: 'https://app.courier.com',
  };
  return <Button onClick={() => toast(notification)}>Show Toast</Button>;
}

const theme = { toast: { backgroundColor: 'black', borderRadius: 5 } };

export function Default({
  position, hideProgressBar, transition,
}) {
  const config = {
    position, hideProgressBar,
    transition, theme,
  };
  return (
    <ToastProvider config={config}>
      <WrappedComponent />
    </ToastProvider>
  );
}

const complexTheme = { toast: { backgroundColor: 'red', borderRadius: 5 } };

export function MoreComplex({
  position, hideProgressBar, transition,
}) {
  const config = {
    position, hideProgressBar,
    transition, theme: complexTheme,
  };
  return (
    <ToastProvider config={config}>
      <WrappedComponent />
    </ToastProvider>
  );
}

export function OnClick({
  position, hideProgressBar, transition,
}) {
  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    alert(e.currentTarget.getAttribute('href'));
  };

  const config = {
    position, hideProgressBar,
    transition, theme, onClick,
  };
  return (
    <ToastProvider config={config}>
      <WrappedComponent />
    </ToastProvider>
  );
}