import React from 'react';
import { NavLink } from 'react-router';

function Home(){
    return(
        <div className='mt-8 '>
            <h1 className='text-center font-bold text-4xl'>Inicio</h1>
            <div className='items-center justify-center flex'>
                <NavLink to='/card' className='text-center font-bold text-2xl mt-4 rounded-lg border-2 bg-slate-300 border-slate-300 px-4 py-2 hover:bg-blue-300 scale-100 hover:scale-110 transition duration-300'>Productos</NavLink>
            </div>
        </div>
    )   
}

export { Home };