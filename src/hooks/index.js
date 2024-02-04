import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscapeKeyUp = (event) => {
      if (event.key === 'Escape') {
        callback(event);
      }
    };

    document.addEventListener('keydown', handleEscapeKeyUp);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyUp);
    };
  }, [callback]);
};
