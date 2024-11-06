import React from 'react';
import '../styles/input.css';
import { InputProps } from '../types/type';

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type, ...props }) => (
  <input
    type={type || 'text'}
    className="input-field"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);

export default Input;
