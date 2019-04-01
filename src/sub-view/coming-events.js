import React from 'react';
import Shadow from '../icons/country-shadow.png';
import Calc from '../icons/other/calc.jpg';
import Uni from '../icons/other/uni.svg';
import Inst from '../icons/other/inst.svg';
import Persons from '../icons/other/persons.png';
import Zain from '../icons/other/zain.png';
import When from '../icons/other/when.png';
import Pin from '../icons/other/pin.png';
import Time from '../icons/other/time.png';
import like from '../icons/other/2/like.svg'
import Share from '../icons/other/2/share.svg'
import {
  
     MDBCol, MDBRow
  } from "mdbreact";

  


const ComingEvent = (d) => {





  return (
    <MDBCol md="2" style={{marginLeft:80}}>
   <div className="coming-event">
   <div className="top">
   <div className="uni-part2">
<p style={{color:"#8d8e8e" , fontSize:15}}>برعاية</p>
   <img className="uniPart-logo2" src={Zain}/>
   </div>
   <div>
   <img className="share" src={Share}/>
   <img className="like" src={like}/>

   </div>
   <p class="event-coming-title">كرنفال عينك على المستقبل</p>
   <img className="topImg" src={Persons}/>
   
 
   </div>
   <div  class="bottom">
 
 
   <div className="row">
   <div class="col-md-12">
   <div class="row">
   <div class="col-md-8">
   <p style={{color:"#535962" , fontSize:15}}>السبت -٣ ديسمبر‏، ‏٢٠١٩م‏ </p>
   </div>
   <div class="col-md-2">
   <img style={{marginRight:5}}  src={When}/>
   </div>
   </div>
   </div>
   {/*  */}
   <div class="col-md-12">
   <div class="row">
   <div class="col-md-8">
   <p style={{color:"#535962" , fontSize:15}}> ‏٨:٢٤ مساءً‏  </p>
   </div>
   <div class="col-md-2">
   <img style={{marginRight:5}} src={Time}/>
   </div>
   </div>
   </div>
   {/*  */}
   <div class="col-md-12">
   <div class="row">
   <div class="col-md-8">
   <p style={{color:"#535962" , fontSize:15 }}>عمان-مجمع الحسين للأعمال-زين زينك</p>
   </div>
   <div class="col-md-2">
   <img style={{marginRight:5}}  src={Pin}/>
   </div>
   </div>
   </div>
   {/* 
 */}
   <div className="row">
   <div className="col-md-4">
   <input type="button" className="btn-view not"  value="إستقبال إشعارات"/>
   </div>
   <div className="col-md-4">
   <input type="button" className="btn-add" value="تسجيل حضور"/>
   </div>
   </div>
   </div>
   </div>
   </div>
       

   
    </MDBCol>
  );
};


    export default ComingEvent;