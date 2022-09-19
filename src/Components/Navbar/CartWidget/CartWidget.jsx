import { useContext } from 'react';
import {TbShirt} from 'react-icons/tb';
import { CartContext } from '../../../Context/CartContext';
import './cartWidget.css';

const CartWidget = () => {
    const { unitsInCart } = useContext(CartContext);

    return (
        <div className='cartWidget'>
            <span><TbShirt />&nbsp;</span>
            <p>{unitsInCart() === 0 ? ' ' : unitsInCart()}</p>
        </div>
    )
};

export default CartWidget;