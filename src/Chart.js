import React from 'react';
import './App.css';
import './Chart.css';




import { } from '@mui/icons-material';



function Chart(props) {
    
  return (
    <div className="Chart">
        
<div className="ChartTitle">{props.title}</div>
<div className="ChartData"><img src={props.data} alt={props.data} /></div>
<div className="ChartInfo">{props.info}</div>

    </div>
  );
}

export default Chart;
