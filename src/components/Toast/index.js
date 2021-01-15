import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContext } from '../../providers';
import { getTransition } from './helpers';
import { ToastStyled } from './styled';

function Toast({ style }) {
  const { config } = useContext(ToastContext);
  const transition = getTransition(config.transition);
  return (
    <ToastStyled
      {...config}
      transition={transition}
      style={style}
    />
  );
}

export default Toast;

Toast.defaultProps = { position: 'top-right' };