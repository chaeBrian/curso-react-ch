import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './main.css';

import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

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
      </Routes>
    </main>
  )
};

export default Main;