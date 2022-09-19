import React from 'react'
import { Routes, Route } from 'react-router-dom';

import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart'
//Stylesheet
import './main.css';

const Main = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' 
               element={<ItemListContainer  saludo='Home in process...'/>}/>
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