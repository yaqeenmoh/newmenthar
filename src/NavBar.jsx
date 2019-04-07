import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import path  from './icons/other/2/Untitled.png' ;
import Path2 from './icons/Path35.svg'
import chat1 from './icons/chat (1).svg'
import notification1 from './icons/notification (1).svg'
import questionmark from './icons/question-mark.svg'

class NavBar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render() {
      return (
        <header>
          <div className="topnav">
          <nav className="navbar navbar-dark navbar-expand-md primary-color"
      role="navigation">
       <div className="header-desktop-leftside col-md-4">
       <ul className="header-desktop-profileicons nav">
     
     
     <li className="nav-item"><a
     href="#!"><img className="marginright"
     
     src={questionmark}></img>
    
     </a>
     </li>
    
     <li className="nav-item"><a
     href="#!">
     <img className="marginright"
     src={chat1}></img></a>
     </li>
    
     <li className="nav-item"><a
     href="#!"><img
     src={notification1}alt=""
     className="marginright"></img>
    
     </a>
     </li>
     <li className="nav-item">
     <div ><a
      aria-haspopup="true"
      href="#" 
      className="dropdown-toggle nav-link white-text"
      aria-expanded="false"><span
      className="white-text mr-2"> لين قطاونة</span></a>
      
      <div tabindex="-1"
      role="menu"
      aria-hidden="true"
      className="dropdown-menu">
      
      <a href="#!"
      style={{color:
      "#NaN7bf9"}}
      className="dropdown-item"> مفضلتي</a>
      
      <a href="#!"
      tabindex="0"
      className="dropdown-item"> دوراتي</a><a
      href="#!" 
      tabindex="0" 
      className="dropdown-item"> جروباتي</a><a
      href="#!" 
      tabindex="0" 
      className="dropdown-item"> ملفاتي</a>
      
      </div>
      
      </div>
      </li>
     </ul>
    
     </div>
     
     <div className="header-desektop-search col-md-6">
     
    
     
      <input placeholder="ابحث  عن  دورات , معملين , أوراق عمل"
      type="text"
      className="form-control custom-control-text2 header-input customInput"
      style={{color: "white", opacity: 1}}/>
     
      
     
      </div>
     
     <div className="right-nav-bar">
     <ul className="navbar-nav ml-auto col-md-2"><div
      className="navbar-brand"><div
      className="container">
      
      <div className="row"><img
      src={path}/>
      
     
      </div>
      
      </div>
      
      </div>
      
      
      
      </ul>
     </div>
    
     
      </nav>

</div>
        </header>
     
  
  
      );
    }
  }

export default NavBar;