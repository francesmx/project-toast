import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastArray, setToastArray }) {
  const handleDismiss = (id) => {
    const nextToastArray = toastArray.filter((toast) => toast.id !== id);
    setToastArray(nextToastArray);
  };

  return (
    <ol
      className={styles.wrapper}
      aria-roledescription="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastArray.length > 0 &&
        toastArray.map((toast) => (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              id={toast.id}
              variant={toast.variant}
              message={toast.message}
              handleDismiss={handleDismiss}
            />
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
