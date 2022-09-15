import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './main.css';

import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart'

const Main = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' 
               element={<ItemListContainer  saludo='Bienvenido'/>}/>
        <Route path='/category/:id'
               element={<ItemListContainer/>}/>
        <Route path='/detail/:id'
               element={<ItemDetailContainer />}/>
        <Route path='/cart'
               element={<Cart />}/>
      </Routes>
    </main>
  )
};

export default Main;