import React from 'react';
import './App.css';
import './Headerstats.css';

import { } from '@mui/icons-material';



function Headerstats(props) {

    let backgroundColor1;
    if ( props.color1 ) {
        backgroundColor1 = props.color1;
    } else {
        backgroundColor1 = 'gray';
    }

    let backgroundColor2;
    if ( props.color2 ) {
        backgroundColor2 = props.color2;
    } else {
        backgroundColor2 = 'gray';
    }

  return (
    <div className='headerstat' style={{background: `linear-gradient(190deg,  ${backgroundColor1},${backgroundColor2})`}}>
     <div className='title' >{props.title}</div>
      <div className='value' >{props.value}</div>
      <div>
      <span className='valuetimeframe' >{props.valuetimeframe}</span>
      <span className='compare' >{props.compare}</span>
      </div>
      <div className='info'> {props.info}</div>
    </div>
  );
}

export default Headerstats;

