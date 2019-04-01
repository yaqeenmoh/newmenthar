import React from 'react';
import Facebook from '../icons/social-media/face.svg';
import Whatsapp from '../icons/social-media/whatsapp.svg';
import Uni from '../icons/other/uni.svg';
import Desc from '../icons/other/desc.png';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const Files = (d) => {




  return (
    <MDBCol md="row" style={{width:650}}>
   
    <div className="fileContainer">
    
    
    <ul className="horizontal-list">
      <li style={{marginTop:15}}><img src={Facebook}/>"</li>
      <li style={{marginRight:30 , marginTop:15}}><img src={Whatsapp}/>"</li>
    

  
    <li>
    <input type="button" className="btn-add" value="تحميل" style={{marginTop:10}}/>
    <p style={{color:"black"}}>186 تحميل</p>
   </li>
   <li>
    <div class="uni-box">
    <img src={Uni} />
    </div>
   </li>

{/*  */}

<li>
    <div style={{margin:0}} class="dr-name">
    <p style={{height:10}}  class="title">
    إسم الدكتور
    </p>
    <p class="value">
    الدكتورة سهى
    </p>
    </div>
    </li>
    {/*  */}
    <li>
    <div style={{margin:0}} class="mnhaj-name">
    <p style={{height:10}} class="title">
    إسم المادة
    </p>
    <p class="value">
    كالكولاس 1
    </p>
    </div>
   </li>
    <li style={{marginTop:15}}>
    <span style={{color:"black"}}>
ملخص المادة
    </span>
    <img style={{marginLeft:10}} src={Desc}/>
    </li>
 

    </ul>
    </div>
 
    </MDBCol>
  );
};

export default Files;