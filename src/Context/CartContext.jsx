import React, { useState, createContext } from "react";


export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            sumQuantity(item, quantity);
        }else{
            setCart([...cart,{...item, quantity}]);
        }
    };

    const isInCart = (id) => {
        return(
            cart.some((prod) => prod.id === id)
        )
    };

    const sumQuantity = (item, quantity) => {
        const cartUp = cart.map((prod) => {
            if (prod.id === item.id){
                const prodUp = {
                    ...prod, quantity: quantity,
                };
                return prodUp
            }else{
                return prod;
            }
        });
        setCart(cartUp)
    };

    console.log(cart);

    const removeItem = (id) => {
        console.log(`${id}: ha sido eliminado`)
        const filterCart = cart.filter((prod) => prod.id !== id);
        setCart(filterCart)
    };

    const clear = () => {
        setCart([]);
    };

    const quantitySave = (id) => {
        const product = cart.find( (prod) => prod.id === id)
        return product?.quantity
    };

    const unitsInCart = () => {
        let units = 0;
        cart.forEach((item) => {
            units += item.quantity;
        });
        return units;
    };

    const totalPrice = () => {
        let collectorB = 0;
        cart.forEach((item) => {
            collectorB += item.price * item.quantity;
        });
        return collectorB;
    };

    return(
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clear,
                quantitySave,
                totalPrice,
                unitsInCart
                }}>
            {children}
        </CartContext.Provider>
    );
    
}

export default CartProvider;