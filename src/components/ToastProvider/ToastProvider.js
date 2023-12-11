import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
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
    <ToastContext.Provider
      value={{
        message,
        selectedRadioOption,
        setSelectedRadioOption,
        toastArray,
        setToastArray,
        handleMessageChange,
        handleSubmit,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
