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
    <div className="counter">

      <div className="counter__div">
        <span className="counter__bttn">
          <button onClick={sumar}>+</button>
          <button onClick={restar}>-</button>
        </span>
        <p>{count}</p>
      </div>

      <button className="counter__bttn--modified" onClick={() => onAdd(count)}>
        <span>Add to </span>
        <picture><TbShirt /></picture>
      </button>
      
    </div>
  );
};

export default ItemCount;
