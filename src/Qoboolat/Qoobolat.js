import React, { Component } from 'react';
import '../App.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import RightSideBar from '../rightSideBar';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
  } from "mdbreact";
  import image1 from '../icons/sky_2.png';
  import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
  import Input from  '../input';


class Qoboolat extends Component{

    render()
    {
        return(


            <div className="grey lighten-5">
             <NavBar></NavBar>

             <MDBRow className="w-100 text-center position">
<RightSideBar/>

            
             <MDBCol className="m-12">
               <Segment raised>
               <div className="rgba">
               <div className="container-fulid">
               <div className="row">
               <div style={{backgroundImage : "url("+image1+")"}} className="form-container">
              
               
               {/* <img src={image1} style={{height:400, marginRight:120}} /> */}
               <Input/>
               </div>
             
        </div>
           
           
             
               </div>
               </div>
               </Segment>
               
               </MDBCol>
               <MDBRow>
                   <div className="col-md-4">

                   </div>
                   <div className="col-md-4">
تصفح وصف نتائج البحث
                   </div>
                   <div className="col-md-4">

</div>
               </MDBRow>
       </MDBRow>

       <MDBRow  className="mt-4">
       
       <MDBCol size="12">
      <Footer/>
      
         </MDBCol>
 </MDBRow>
            </div>
            
        )
    }
}
export default Qoboolat;