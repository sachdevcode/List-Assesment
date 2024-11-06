import React from 'react';
import '../styles/error-message.css';
import { ErrorMessageProps } from '../types/type';



const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <p className={`error-message ${error ? 'visible' : 'hidden'}`}>
      { error}
    </p>
  );
};

export default ErrorMessage;
