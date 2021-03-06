import React from 'react';
import Shadow from '../icons/country-shadow.png';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const CountryCard = (d) => {

const style = {
    background: "url("+d.data.url+")",
 width:183,
    height:350,
    position:"relative",
    backgroundSize :"183px 350px"
}



  return (
    <MDBCol md="2" >
   
        <div style={style} className="hover-country">
        <img className="flag" src={d.data.flag}/>
        <span className="flag-title">{d.data.title}</span>
        <div className="grad">

        
        </div>

        </div>

   
    </MDBCol>
  );
};


    export default CountryCard;