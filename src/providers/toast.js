import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Body from '../components/Body';
import { Toast } from '../components';
export const ToastContext = React.createContext({});

export function ToastProvider({
  children, theme, classes, config,
}) {
  const handleToast = ({
    title, body, icon,
    clickAction,
  }) => {
    toast(<Body title={title} body={body} icon={icon} clickAction={clickAction} />);
  };

  const state = {
    toast: handleToast, classes, config, theme,
  };

  return (
    <ToastContext.Provider value={state}>
      <Toast />
      {children}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = { children: PropTypes.array };