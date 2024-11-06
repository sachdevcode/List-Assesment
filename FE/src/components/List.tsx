import React from "react";
import "../styles/list.css";
import { ListProps } from "../types/type";

const List: React.FC<ListProps> = ({ items, isLoading }) => {
  return (
    <ul className="list">
    {isLoading ? (
      Array.from({ length: 3 }).map((_, index) => (
        <li className="skeleton-item" key={index} />
      ))
    ) : (
      items.map((item) => (
        <li className="list-item" key={item._id}>
          {item.name}
        </li>
      ))
    )}
  </ul>
  );
};

export default List;
