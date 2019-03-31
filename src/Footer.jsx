import React from 'react'

import { MDBTable, MDBTableBody, MDBTableHead,MDBContainer,MDBRow,MDBIcon, MDBCol } from 'mdbreact';
import playstore from './icons/playstore.svg'
import appstore from './icons/appstore.svg'
const Footer = props => {
  return (
      <div className="footer" style={{marginTop:50}}>
    <MDBTable className="pl-2 text-center unique-color-dark white-text" borderless>

      <MDBTableHead >
        <tr className="bold">
        <th >من نحن</th>
            <th>من نحن</th>
            
            <th>الدعم</th>
            <th>روابط سريعه</th> 
            
   
        
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
        <td>جروبات جو اكاديمي</td>
    <td>دبلومات ودورات</td>
     <td>مدارس وجامعات</td>
     <td> بنك الاسئلة</td>  
        </tr>
        <tr>
        <td>جروبات جو اكاديمي</td>
            <td>دبلومات ودورات</td>
            <td>مدارس وجامعات</td>
            <td> بنك الاسئلة</td>
           
        </tr>
        <tr>
        <td> بنك الاسئلة</td> 
            <td>جروبات جو اكاديمي</td>
             
            <td>دبلومات ودورات</td>
            <td>مدارس وجامعات</td>  
        </tr>
        <tr>
            <td>جروبات جو اكاديمي</td>
            <td>دبلومات ودورات</td>
            <td>مدارس وجامعات</td>
            <td> بنك الاسئلة</td>  
            
        </tr>
        
                <td>مدارس وجامعات</td>
                <td> بنك الاسئلة</td>  
            
                <tr>
               <td ><a href="#"><img className="m-2" src={playstore}></img></a> </td>
               
             
                 <td><a href="#"> <img className="m-2" src={appstore}></img></a></td>
                 </tr>

        <tr>
            <td>
            
            </td>
            <div> 
            <MDBRow className="m-1">
                 <MDBCol>

                 <p>جميع الحقوق محفوظة © 2018</p>
                 </MDBCol>
                 </MDBRow>
                 <MDBRow className="m-3">
                 <MDBCol >
             
             <MDBIcon  className="p-2" fab  size="2x" icon="facebook-f" />
             <MDBIcon  className="p-2" fab  size="2x" icon="twitter" />
             <MDBIcon  className="p-2" fab  size="2x" icon="youtube" />
             <MDBIcon  className="p-2" fab  size="2x" icon="whatsapp" />
             <MDBIcon  className="p-2" far  size="2x" icon="envelope" />
             </MDBCol>
             </MDBRow>
           
            </div>
            
        </tr>
      </MDBTableBody>
    </MDBTable>

    </div>
  );

  
}

export default Footer;
