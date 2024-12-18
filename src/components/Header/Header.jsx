import React from 'react';
import { NavLink } from 'react-router';
import { useCart } from '../../Context/CarContext';

const Header = () => {
  const { cart } = useCart();
  return (
    <header className="py-4 px-6 rounded-lg fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 ml-4 bg-gray-200 shadow-lg z-10">
      <ul className='flex justify-between items-center'>
        <li className='font-bold text-xl ml-2 mr-2'>
            <NavLink to="/" end>Inicio</NavLink>
        </li>
        <li className='navi ml-4 transform scale-105 hover:scale-110 transition duration-300 hover:text-slate-950'>
            <NavLink to="/card" end>Productos</NavLink>
        </li>
        <li className='navi ml-4 transform scale-105 hover:scale-110 transition duration-300 hover:text-slate-950'>
            <NavLink to="/cart" end>Carrito: <span className="text-slate-950">{cart.length}🛒</span></NavLink>
        </li>
      </ul>
    </header>
  );
};

export { Header };