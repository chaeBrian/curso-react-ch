import React, {useState} from 'react';
import "./itemCount.css";

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
        <div>
            <span>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </span>
            <p>{count}</p>
        </div>
        <button className='itemCount__addCart' onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;