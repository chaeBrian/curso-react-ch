import React, {useState} from 'react';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import './form.css';
import { dataBase } from '../../FirebaseConfig/FirebaseConfig';

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
        <span className='form__span'>Name*</span>
        <input type="text" 
                name="name" 
                value={userName} onChange={handleChangeUserName} required>
        </input>
        <span className='form__span'>Phone Number*</span>
        <input type="tel"
                name="phone" 
                value={phone} onChange={handleChangePhone} required>
        </input>
        <span className='form__span'>Mail*</span>
        <input type="mail"
                name="mail"
                value={mail} onChange={handleChangeMail} required>
        </input>
        <button>Checkout</button>
    </form>
  )
}

export default Form;