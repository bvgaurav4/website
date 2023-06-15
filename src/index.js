import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Nav} from './app2';
import {Prod} from './app3';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
var names=[{name:"mother board",color:"#58B3FF",pic:"/resorce/mother.jpg"},
           {name:"processor",color:"#FF605F",pic:"/resorce/processor.jpg"},
           {name:"ram",color:"#FFD52E",pic:"logo.jpg"},
           {name:"ssd",color:"#49DD8E",pic:"logo.jpg"},
           {name:"keyboard",color:"#AE99FF",pic:("/resorce/keyboard.jpg")},
           {name:"mouse",color:"#AE99FF",pic:("/resorce/mouse.jpg")},
           {name:"monitor",color:"#AE99FF",pic:("/resorce/monitor.jpg")},
           {name:"laptops",color:"#AE99FF",pic:("logo.jpg")},
          {name:"grafic cards",color:"#AE99FF",pic:("logo.jpg")},
          {name:"power supply",color:"#AE99FF",pic:("logo.jpg")},
          {name:"grafic cards",color:"#AE99FF",pic:("logo.jpg")},
          {name:"power supply",color:"#AE99FF",pic:("logo.jpg")},
          {name:"power supply",color:"#AE99FF",pic:("logo.jpg")},
          {name:"grafic cards",color:"#AE99FF",pic:("logo.jpg")},
          {name:"power supply",color:"#AE99FF",pic:("logo.jpg")}];
root.render(
  <React.StrictMode>
    <Nav color="black" height="100px" id="nav" pic="yes" width="1537px"/>
    <Nav color="yellow" height="10px" id="looks" width="1537px"/>
    <div>
    {names.map(object=>
    <Prod bgcolor={object.color}  
      pic={object.pic}>
      <h4>buy the best <br/>{object.name} <br/>
      for your preference</h4>
    </Prod> )}
    </div>
    </React.StrictMode>
);
reportWebVitals();
 