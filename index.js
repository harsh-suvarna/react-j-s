import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
const styling={
  display:'flex',
  justifyContent:'center',
  backgroundColor:'yellow',
  textAlign:'center',
  marginRight:'160px',
  marginLeft:'160px',
  borderRadius:'20px',
  marginTop:'200px'

}


const styling3={
  marginTop:'30px',
  fontSize:'2.5rem',

}
const greetStyle={ };
 

 let currDate=new Date(2023, 6, 12, 20)
 currDate=currDate.getHours()
 let greeting='';
 if(currDate>=12 && currDate<=12){
  greeting='Good Morning';
  greetStyle.color='green';
 }
 else if(currDate>=12 && currDate<=19){
  greeting='Good Afternoon';
  greetStyle.color='Orange';
 }else{
  greeting='Good night';
  greetStyle.color='dark';
 }
 
 

 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(
 <>
 <div style={styling}>
   <h1 style={styling3}>Hello,<span style={greetStyle}>{greeting}</span> </h1>
   
  </div> 
 
 </>
 )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
