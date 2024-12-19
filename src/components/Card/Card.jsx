import React, { useState, useEffect } from 'react';
import { useCart } from '../../Context/CarContext';
import { useProducts } from '../../Hooks/UseProducts';
import './Card.css';

function Card() {
    
    const { cart, addToCart, removeFromCart } = useCart(); // Obtener la función addToCart del contexto
    const { data, loading, error } = useProducts(); // Obtener informacion de la API con el hook useProducts
    const [search, setSearch] = useState('');

  if(error){
    const messageError = 'Error al cargar los productos, intenta nuevamente más tarde';
  }

  const filteredData = data.filter((product) => {
    // Retorna true solo si encuentra coincidencia
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) 
    //   product.category.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  
  return (
    <div id='card'>
      <input 
      type="text" 
      placeholder="Buscar..." 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      className="w-full mt-4 p-2 rounded-lg border-2 border-gray-300"
      />
        <p className='font-bold text-xl'>Productos en el carrito: {cart.length}</p>
        {error && <p>{messageError}</p>}


        <div className="carta grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {(search.length === 0 ? data : filteredData).map((item) => (
          
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.category.image}
                alt={item.category.name}
                className="w-full h-48 object-cover"
                />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.category.name} <br /> ${item.price}</p>
              <button 
                onClick={() => addToCart(item)} 
                className="rounded-lg ml-4 mb-2 hover:scale-110 bg-slate-300 hover:bg-blue-200 transition-transform duration-300 "
                >
                Add 🛒
              </button>
              <button onClick={() => removeFromCart(item.id)} className="rounded-lg ml-4 mb-2 hover:scale-110 bg-red-300 hover:bg-red-200 transition-transform duration-300 ">
                Eliminar
              </button>
            
            </div>
            ))}
           
        </div>
        {loading && <div className='flex justify-center items-center mt-6'><span className="loader"></span></div>}
    </div>
  );
}

export { Card };
