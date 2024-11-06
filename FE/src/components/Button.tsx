import React from "react";
import "../styles/button.css";
import { ButtonProps } from "../types/type";
import Loading from "./Loader";

const Button: React.FC<ButtonProps> = ({
  onClick,
  isLoading,
  text,
  ...props
}) => (
  <button  onClick={onClick}  {...props}>
    {isLoading ? <Loading/> : text}
  </button>
);

export default Button;
