import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICON_SIZE = 24;

const ICON = {
  notice: <Info size={ICON_SIZE} />,
  warning: <AlertTriangle size={ICON_SIZE} />,
  success: <CheckCircle size={ICON_SIZE} />,
  error: <AlertOctagon size={ICON_SIZE} />,
};

function Toast({ id, message, variant, handleDismiss }) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>{ICON[variant]}</div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={() => handleDismiss(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
