import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import './main.css'

const Main = () => {
  return (
    <main className='main'>
      <ItemListContainer  saludo='Bienvenido'/>
      <ItemDetailContainer />
    </main>
  )
};

export default Main;