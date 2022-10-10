import { useContext } from 'react';
import {TbShirt} from 'react-icons/tb';
import { CartContext } from '../../../Context/CartContext';
import './cartWidget.css';

const CartWidget = () => {
    const { unitsInCart } = useContext(CartContext);

    return (
        <div className='nav__cartWidget'>
            <picture>
                <TbShirt className='nav__cartIcon'/>
            </picture>
            <span>{unitsInCart() === 0 ? ' ' : unitsInCart()}</span>
        </div>
    )
};

export default CartWidget;