import React from "react";
import Item from "./Item/Item";
//Stylesheet
import "./itemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="main__div--container">
      <h3>SHIRTS</h3>
      <div className="main__div">
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
