import React, {useState} from 'react';
import "./itemCount.css";
import {RiShoppingCart2Line} from 'react-icons/ri'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    
    const sumar = () => {
        count < stock && setCount(count + initial);
    };
    const restar = () => {
        count > 1 && setCount(count - initial);
    };

    return (
    <div className='itemCount'>
        <div className='itemCount__div'>
            <span>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </span>
            <p>{count}</p>
        </div>
        <button className='itemCount__addCart' onClick={onAdd}>Add to <RiShoppingCart2Line /></button>
    </div>
  )
}

export default ItemCount;