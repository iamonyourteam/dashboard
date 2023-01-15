import React from 'react';
import './App.css';
import './Nav.css';
import logo from './Assets/madeuplogo.png';
import { Home, CreditCard, People, Assessment } from '@mui/icons-material';

function Nav() {
  return (
    <div >
<div className="nav">
    <div className="logo">
        <img src={logo}></img>
        <span className='logotxt'>LOGO</span>
    </div>
    <div className="links">
        <div className="home link">
            <div className="home icon"><Home/></div>
            <div className="home text">Home</div>
        </div>
        <div className="Orders link">
            <div className="Orders icon"><CreditCard/> </div>
            <div className="Orders text">Orders</div>
        </div>
        <div className="Customers link">
            <div className="Customers icon"><People/></div>
            <div className="Customers text">Customers</div>
        </div>
        <div className="Reports link">
            <div className="Reports icon"><Assessment/></div>
            <div className="Reports text">Reports</div>
        </div>
     
    </div>
    <div className="name">Jason Neff</div>
</div>
    </div>
  );
}

export default Nav;
