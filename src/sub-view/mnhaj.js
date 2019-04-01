import React from 'react';
import Shadow from '../icons/country-shadow.png';
import Calc from '../icons/other/calc.jpg';
import Uni from '../icons/other/uni.svg';
import Inst from '../icons/other/inst.svg';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";

  


const Mnhaj = (d) => {





  return (
    <div style={{width:200}}>
   <div className="mnhaj">
   <div className="top">
   <div className="uni-part">
   <img className="uniPart-logo" src={Uni}/>
   </div>
   <img className="topImg" src={Calc}/>
   <img src={Inst} className="inst"/>
   <p className="inst-name">{d.data.instName}</p>
   </div>
   <div  class="bottom">
   <div className="price">
   <span>{d.data.price} دينار</span>
   </div>
  


   <p style={{marginRight:10,fontWeight:'bold' }} className="course-title">{d.data.title}</p>
   <p style={{marginRight:10,color: "#535962",fontFamily: "Noto Kufi Arabic"}}>{d.data.desc}</p>
   <div className="row">
   <div className="col-md-4" >
   <input type="button" className="btn-view" value="تصفح الدورة"/>
   </div>
   <div className="col-md-4" >
   <input type="button" className="btn-add" value="إضافة لدوراتي"/>
   </div>
   </div>
   </div>
   </div>
       

   
   </div>
  );
};


    export default Mnhaj;