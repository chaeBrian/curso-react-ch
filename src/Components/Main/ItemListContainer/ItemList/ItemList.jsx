import React from 'react';
import Item from './Item/Item';
//Stylesheet
import './itemList.css';

export const ItemList = ({items}) => {
  return (
    <div className='itemList'>
        {items.map((item) => {
            return (
                <Item item={item} key={item.id}/>
            );
        })}
    </div>
  )
}

export default ItemList;