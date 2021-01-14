import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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

Toast.propTypes = {
  config: PropTypes.shape({ position: PropTypes.string, transition: PropTypes.string }),
  classes: PropTypes.shape({
    container: PropTypes.string,
    toast: PropTypes.string,
    body: PropTypes.string,
    progress: PropTypes.string,
  }),
  style: PropTypes.object,
};
Toast.defaultProps = { position: 'top-right' };