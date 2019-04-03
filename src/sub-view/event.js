import React from 'react';
import Pic from '../icons/other/pic1.png';
import CardLayout from '../CardLayout';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const Event = (d) => {





  return (
    <div style={{height:400}}>
    <MDBCol md="3" style={{ marginLeft : d.data.margin }}>
  <CardLayout>
    <div className="event-pic">
    <img src={Pic}/>
    <div className="event-content">
    <div className="row">
    <div className="col-md-6 styleTime">
    <p style={{marginLeft:10 ,color:"#AEACAC"}}>٣ ديسمبر‏، الساعة ‏٨:٢٤ م‏ </p>
    </div>
    <div className="col-md-4">
    <p>أخبار محلية
 </p>
    </div>
    <div className="row">
    <div style={{marginLeft:"auto",marginRight:"auto"}} className="col-md-6">
    <p>
    نتائج التوجيهي ستعلن في الخامس من الشهر الجاري بعد انعقاد المؤتمر

    </p>
    </div>
    </div>
  
    
  <a className="event-read" href="javascript:void(0);">إقرا المزيد</a>
 
    </div>
    </div>
    </div>
   
    </CardLayout>
   
    </MDBCol>
    </div>
  );
};


    export default Event;