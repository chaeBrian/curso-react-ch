import React, { useEffect, useState } from "react";
import { TbShirt } from "react-icons/tb";
//Stylesheet
import "./itemCount.css";

export const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };
  const restar = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="-itemCount">
      <div className="_itemCount__bttnCtr">
        <span className="_bttnCrt-countCtr">
          <button onClick={sumar}>+</button>
          <button onClick={restar}>-</button>
        </span>
        <p>{count}</p>
      </div>
      <button className="_itemCount__addCartBttn" onClick={() => onAdd(count)}>
        Add to <TbShirt className="_addCartBttn__icon" />
      </button>
    </div>
  );
};

export default ItemCount;
