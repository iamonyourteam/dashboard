import React from 'react';
import './App.css';
import './Cards.css';
import Chart from './Chart.js';
import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";
import'../node_modules/react-grid-layout/css/styles.css'
import'../node_modules/react-resizable/css/styles.css'
import { } from '@mui/icons-material';
import lineChart from './Assets/Line Chart.svg';
import barChart1 from './Assets/Bar Chart 1.svg';
import barChart2 from './Assets/Bar Chart 2.svg';
import pieChart from './Assets/Doughnut Chart.svg';



function Cards() {
  
  
  const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    
    <div className="CardsContainer">
    <div className='Cards'>
  <ResponsiveGridLayout
       className="layout"
       compactType="vertical"
      
       breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
       cols={{ lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 }}
       
      >
        <div className="Card" key="a" data-grid={{ x: 0, y: 0, w: 2, h: 4, margin: 10 }}>
          <div className="CardContent">
            <Chart title="Line Chart Title" data= {lineChart} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          </div>
        </div>
        <div className="Card" key="b" data-grid={{ x: 2, y:0, w: 1, h: 2}}>
        <div className="CardContent">
        <Chart title="Pie Chart Title" data={pieChart} info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.Lorem ipsum dolor sit amet. "/>
        </div>
        </div>
        <div className="Card" key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2}}>
        <div className="CardContent">
        <Chart title="Bar Chart Title" data={barChart1} info="22"/>
        </div>
        </div>
        <div className="Card" key="d" data-grid={{ x: 2, y: 2, w: 2, h: 2 }}>
        <div className="CardContent">
        <Chart title="Bar Chart Title" data={barChart2} info=""/>
        </div>
        </div>
        <div className="Card" key="e" data-grid={{ x: 0, y: 3, w: 4, h: 4 }}>
        <div className="CardContent">
        <Chart title="Future Orders" data="22" />
        </div>
        </div>
      </ResponsiveGridLayout>

    </div>
    </div>
  );
}

export default Cards;
