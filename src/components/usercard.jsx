// write the component code here
import React from 'react';
import '../App.css';

const Usercard = ({name,email,pno,address,image}) => {
    return (
        <div  className="box">
            <div className='profile'>
                <img  src={image} alt='image'/>
            </div>
            <div className='name'>
                <p><strong>Name :</strong>{name}</p>
            </div>
            <div className='email'>
                <p><strong>Email :</strong>{email}</p>
            </div>
            <div className="contact">
                <p><strong>Phone No :</strong>{pno}</p>
            </div>
            <div className='address'>
                <p><strong>Address :</strong>{address}</p>
            </div>


        </div>
    );
}

export default Usercard;