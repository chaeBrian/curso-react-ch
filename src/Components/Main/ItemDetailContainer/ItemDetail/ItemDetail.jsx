import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../Context/CartContext";
//Stylesheet
import "./itemDetail.css";
import { TbShirt } from "react-icons/tb";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addItem, quantitySave } = useContext(CartContext);

  const onAdd = (quantity) => {
    setCantidad(quantity);
    addItem(item, quantity);
  };

  const quantity = quantitySave(item.id);

  return (
    <section className="sectionDetail">
      <div className="sectionDetail__logo">
        <picture>
          <img src={item.logo} alt={item.nationality} />
        </picture>
        <picture>
          <img src={item.brand} alt="shirt logo" />
        </picture>
        <span>{item.nationality}</span>
      </div>

      <picture className="sectionDetail__picture">
          <img src={item.img} alt={item.title} />
        </picture>

      <div className="sectionDetail__div--picture">
        <div className="sectionDetail__logo--picture">
          <picture>
            <img src={item.logo} alt={item.nationality} />
          </picture>
          <picture>
            <img src={item.brand} alt="shirt logo" />
          </picture>
          <span>{item.nationality}</span>
        </div>
        <picture className="sectionDetail__picture--div">
          <img src={item.img} alt={item.title} />
        </picture>
      </div>

      <div className="sectionDetail__div">
        <div className="sectionDetail__div--div">
          <span className="sectionDetail__span--div">{item.deets}</span>
          <span className="sectionDetail__span--div">${item.price},00</span>
        </div>
        <h3>{item.title}</h3>
        <span className="sectionDetail__span">{item.description}</span>
        {cantidad === 0 ? (
          <ItemCount stock={item.stock} initial={quantity} onAdd={onAdd} />
        ) : (
          <Link className="sectionDetail__link" to="/cart">
            <p>go to</p>
            <picture className="sectionDetail__div-icon">
              <TbShirt />
            </picture>
          </Link>
        )}
        </div>
    </section>
  );
};

export default ItemDetail;
