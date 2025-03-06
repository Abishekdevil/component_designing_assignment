import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';
import img from './assets/images.jpeg';
function App() {
  const cards = [
    {
      Name: "Shank",
      Email: "shankalone@gamil.com",
      Contact : 8754212378,
      Address : "2,AnkulStreet,Saidapet,Chennai",
      image:img
    },
    {
      Name: "Anbu",
      Email: "anbuthamizh@gamil.com",
      Contact : 9445887712,
      Address : "34,Sairam Nagar,T.nagar,Chennai",
      image:img
    },
    {
      Name: "dhanyaa",
      Email: "dhanyaa@gamil.com",
      Contact : 7282445512,
      Address : "54,Patabiraman street,Chengalpet,Chennai",
      image:img
    },
    {
      Name: "Lithu",
      Email: "lithuu@gamil.com",
      Contact : 9344551270,
      Address : "2nd cross,ram nagar,tambaram,Chennai",
      image:img
    },
    {
      Name: "Abi",
      Email: "abi@gamil.com",
      Contact : 9345543149,
      Address : "2,Shakthi nagar,Bangalore",
      image:img
    },
  ]
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((i, index) => (
        <Usercard key={index} name={i.Name} email={i.Email} pno={i.Contact} address={i.Address} image={i.image} />
      ))}
    </div>
  );
}

export default App;
