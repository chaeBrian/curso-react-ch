import React, {useState} from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import './form.css';
import { dataBase } from '../Main/FirebaseConfig/FirebaseConfig.jsx';

const Form = ({cart, total, clear, handleId}) => {

    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer:{userName: userName, phone: phone, mail: mail},
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(dataBase, 'orders');

       addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clear();
       })
    };

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeMail = (event) => {
        setMail(event.target.value);
    }

  return (
    <form className='form' action='' onSubmit={handleSubmit}>
        <label className='form__span'>Name*</label>
        <input type="text" 
                name="name" 
                value={userName} onChange={handleChangeUserName} required>
        </input>
        <label className='form__span'>Phone Number*</label>
        <input type="tel"
                name="phone" 
                value={phone} onChange={handleChangePhone} required>
        </input>
        <label className='form__span'>Mail*</label>
        <input type="mail"
                name="mail"
                value={mail} onChange={handleChangeMail} required>
        </input>
        <button>Checkout</button>
    </form>
  )
}

export default Form;