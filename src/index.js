// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// my work
// import React from 'react';
// import ReactDOM from 'react-dom';



// let fname="hema";
// let time=new Date().toLocaleTimeString();
// let native="bsc";
// let kiran={
//   color:"white",
//   backgroundColor:"black",
// }


// ReactDOM.render(
//   <>
//   <h1 style={kiran}>react says hi</h1>
//   <p>{`this is ${fname} ${native} from kaidala`} {Math.floor(1.2345678)}</p>
//   <img src="https://www.google.com/search?q=images&sxsrf=ALiCzsaq-Zcpt1RTM8m_GqEc76pKxkp1fw:1656482391202&tbm=isch&source=iu&ictx=1&vet=1&fir=2nDXavJs9DoKTM%252CB51x0PBR9KNzvM%252C_%253BDH7p1w2o_fIU8M%252CBa_eiczVaD9-zM%252C_%253BsPwUW2x5Z3mupM%252CnBiD9BWYMB87aM%252C_%253Bez-ubljHwN9MSM%252Cm4H9nlxeVf5uvM%252C_%253BTEkNdoxNDdjBqM%252Cd4onyJHU0a8ROM%252C_%253BarFfSjMu_GX7sM%252CUkcvm3PybD5jEM%252C_%253BO5RXpwJLOupVkM%252CLOFnE7wghBVyxM%252C_%253BIizY1BpQ3iE_iM%252C3jhko1yxn_N42M%252C_%253BISsdmwh92GPtrM%252CtnVTsEa64LdCyM%252C_%253BpFGFNV5oo1rdVM%252CT_IX7ra8y3ok2M%252C_&usg=AI4_-kRIunYEri2ibW1H6JbtkGjgtiMPkA&sa=X&ved=2ahUKEwi2-YPk_dH4AhUCDkQIHQ0FBEsQ9QF6BAgREAE#imgrc=ez-ubljHwN9MSM " alt="photo"/>
  
//   <a href="letsout.com" title="hema"> www.google.com</a>
//   <h1 style={{color:'white',
//   backgroundColor:'black',}}>{time}</h1>
//   </>,
//   document.getElementById('root')
// );
 import React from 'react';
 import ReactDOM from 'react-dom';
 import Kiran from './components/footer';
 import Kiran1 from './components/header';
 import Kiran2 from './components/main';
 import {myname} from './components/header'
 

 ReactDOM.render( 
  <>
  <h1>{myname}</h1>
  </>
  ,document.getElementById('root'));