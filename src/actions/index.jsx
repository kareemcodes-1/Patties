import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();



export function CartProvider({children}){

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

    const [openModal, setOpenModal] = useState(false);
    const [size, setSize] = useState('Double');
    const [errorModal, setErrorModal] = useState(false);
    

    function addToCart(item){

        const exists = cartItems.some((cartItem) => cartItem.name.toLowerCase() === item.name.toLowerCase());


        if(exists){
            alert('Item already exist in cart');
            setErrorModal(true);
            return;
        }else{
            const updatedItem = {
                ...item,
                quantity: 1,
                size: size,
            }
            const updatedCartItems = [...cartItems, updatedItem];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setOpenModal(true);
        }
    }

    function decrementQuantity(item){
        const exists = cartItems.some((cartItem) => cartItem.name.toLowerCase() === item.name.toLowerCase());
        if(exists){
            const updatedCart = cartItems.map((cartItem) => {
                if (cartItem.name.toLowerCase() === item.name.toLowerCase()) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1,
                    };
                }
                return cartItem;
            });
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        }else{
            return alert('Cannot find item');
        }
    }

    function incrementQuantity(item){
        const exists = cartItems.some((cartItem) => cartItem.name.toLowerCase() === item.name.toLowerCase());
        if(exists){
            const updatedCart = cartItems.map((cartItem) => {
                if (cartItem.name.toLowerCase() === item.name.toLowerCase()) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                    };
                }
                return cartItem;
            });
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        }else{
            return alert('Cannot find item');
        }
    }


    function deleteItem(item){
        const updatedCartItems = cartItems.filter((cartitem) => cartitem.id !== item.id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    
    function clearCart(){
        setCartItems([]);
        localStorage.removeItem('cartItems');
    }

    return(
        <CartContext.Provider value={{addToCart, cartItems, openModal, size, deleteItem, setSize, incrementQuantity, decrementQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);