import React from 'react';
import './App.css';
import './Header.css';
import Headerstats from './Headerstats';

function Header() {
  return (
    <div className="headerwrapper">
    <div className='header'>
      <Headerstats title="Sales" value="$2.7 M" valuetimeframe="YTD" compare="1.4 V LY" info="95%" color1="#973ED9" color2="#28CBF0"/>
      <Headerstats title="Closing" value="25%" valuetimeframe="YTD" compare="" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis diam, imperdiet in."color1="#FA4559" color2="#FF808A"/>
      <Headerstats title="Closing" value="25%" valuetimeframe="YTD" compare="" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis diam, imperdiet in."color1="#1DBAB1" color2="#26E396"/>
      <Headerstats title="Orders" value="$7.1 M" valuetimeframe="YTD" compare="1.4 V LY" info="95%"color1="#F1A450"  color2="#F6C340"/>
    </div>
    </div>
  );
}

export default Header;
