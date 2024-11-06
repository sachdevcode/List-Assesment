import React from "react";
import "../styles/loading.css";

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 14, color = "#fff" }) => (
  <div
    className="loading-spinner"
    style={{
      width: size,
      height: size,
      borderColor: `${color} transparent ${color} transparent`,
    }}
  ></div>
);

export default Loading;
