import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [selectedRadioOption, setSelectedRadioOption] =
    React.useState('notice');
  const [toastArray, setToastArray] = React.useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const resetValues = () => {
    setMessage('');
    setSelectedRadioOption('notice');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant: selectedRadioOption,
    };
    const nextToastArray = [...toastArray, newToast];
    setToastArray(nextToastArray);
    resetValues();
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastArray.length > 0 && (
        <ToastShelf toastArray={toastArray} setToastArray={setToastArray} />
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                className={styles.messageInput}
                onChange={(event) => handleMessageChange(event)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label
                  htmlFor={`variant-${variant}`}
                  key={`variant-${variant}`}
                >
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={selectedRadioOption === variant}
                    onChange={(event) => {
                      setSelectedRadioOption(event.target.value);
                    }}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
