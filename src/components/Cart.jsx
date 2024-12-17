import React from 'react';
import { useCart } from '../Context/CarContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Acceder al carrito desde el contexto
    const handleWhatsApp = () => {
        const total = cart.reduce((total,item) => total + item.price, 0)
        const cartMessage = cart
        .map((product) => `${product.title} - $${product.price}`)
        .join('\n');
        let message;
        if(cart.length === 1){
            message = `¡Hola! Estoy interesado en el siguiente producto:\n\n${cartMessage}\n\n Total: $${total}\n\nGracias!`;
        }else{
            message = `¡Hola! Estoy interesado en los siguientes productos:\n\n${cartMessage}\n\nPor un Total de: $${total}\n\nGracias!`;
        }
        const url = `https://wa.me/50683745485?text=${encodeURIComponent(message)}`        
        window.open(url, '_blank')
    
    }


  return (
    <div className="cart bg-gray-100 p-4 rounded-lg mt-4 grid-cols-2 gap-4">
        <div className='w-full flex justify-between'>
            <p className='font-bold text-xl'>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
            <h2 className="text-3xl font-bold">Carrito de Compras</h2>
            <p className='font-bold text-sm'>Productos en el carrito: {cart.length}</p>

        </div>
        
      {cart.length === 0 ? (
        <p className='text-center font-bold'>Tu carrito está vacío</p>
      ):(
        <ul className='mt-6'>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mt-4">
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
            <div className='flex justify-center items-center mt-6'>
                <button onClick={handleWhatsApp} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                  Contactar con el vendedor
                </button>
            </div>
        </ul>
        
      )}
      
    </div>
  );
};

export { Cart };
