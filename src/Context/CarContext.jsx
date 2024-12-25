import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    // const myLocalStorage = localStorage.getItem('cart')
    // let parset;
    // if(!myLocalStorage){
    //     localStorage.setItem('cart', JSON.stringify([]))
    //     parset = []
    // }else{
    //     parset = JSON.parse(myLocalStorage)
    // }
    // const saveCart = () => {
    //   localStorage.setItem('cart', JSON.stringify(parset))
    // }
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };  // ...existing code...
  const removeOneFromCart = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(item => item.id === productId);
      if (index !== -1) {
        const newCart = [...prevCart];
        newCart.splice(index, 1);
        return newCart;
      }
      return prevCart;
    });
  };
  // ...existing code...
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeOneFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al contexto
export const useCart = () => useContext(CartContext);

