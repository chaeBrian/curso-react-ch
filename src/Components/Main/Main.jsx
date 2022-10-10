import React from 'react'
import { Routes, Route } from 'react-router-dom';
//Components
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart'
import ScrollToTop from '../SrollToTop/ScrollToTop';
//Stylesheet
import './Main.css';

const Main = () => {
  return (
    <main>
      <ScrollToTop />
      <Routes>
        <Route path='/' 
               element={<ItemListContainer cName='main__div--section'/>}/>
        <Route path='/category/:id'
               element={<ItemListContainer cName='hidden'/>}/>
        <Route path='/detail/:id'
               element={<ItemDetailContainer />}/>
        <Route path='/cart'
               element={<Cart />}/>
      </Routes>
    </main>
  )
};

export default Main;