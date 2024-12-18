import React from 'react';
import { useCart } from '../../Context/CarContext';
import './Cart.css';

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
    const uniqueCart = cart.filter(
      (item, index, self) => self.findIndex(i => i.id === item.id) === index
    );
    
    const aggregatedCart = cart.reduce((acc, item)=>{
      
      const foundItem = acc.find((i) => i.id === item.id);
      if(foundItem){
        foundItem.length += 1;
       

      }else{
        acc.push({...item,length: 1})
        
      }
      return acc;
    }, [])


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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
          {aggregatedCart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden mt-2">
              <div className='flex flex-col justify-between items-center p-4'>
                <img className='w-full mb-4 image'
                src={item.category.image}
                alt="" />
                <span className='ml-2 font-bold text-ellipsis overflow-hidden whitespace-wrap'>{item.title}</span>
              <span className='text-lg font-bold text-center mb-4'>${item.price}</span>
              {/* <span className='ml-2 text-ellipsis overflow-hidden whitespace-nowrap'>{item.title}</span> */}
              {item.length == 1 ? <span>{item.length} Unidad</span> : <span>{item.length} Unidades</span>}
              
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Eliminar
              </button>
              
            </div>
            
          ))}
            <div className='flex justify-center items-center mt-6'>
                <button onClick={handleWhatsApp} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                  Contactar con el vendedor
                </button>
            </div>
        </div>
        
      )}

           
      
      
    </div>
  );
};

export { Cart };
