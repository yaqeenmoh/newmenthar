import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import path  from './icons/girl.png' ;
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
      
      
      <nav className="navbar navbar-dark navbar-expand-md primary-color"
      role="navigation">
      
      <div className="header-desktop-leftside col-md-4">
      
      <ul className="header-desktop-profileicons nav col-md-6">
      
      
      <li className="nav-item"><a
      href="#!"><img
      className="margin"
      src="/static/media/question-mark.ec349e0f.svg"></img>
      
      </a></li>
      
      <li className="nav-item"><a
      href="#!">
      <img className="margin"
      src={questionmark}></img></a></li>
      
      <li className="nav-item"><a
      href="#!"><img
      src={notification1}alt=""
      className="margin"></img>
      
      </a></li>
      
      </ul>
      
      <div className="header-desktop-profile col-md-6">
      
      <img src="/static/media/girl.6b23eaa1.png"
      alt=""style=
      {{opacity:0.75,width:38.15,
      height:35.02}}
      className="rounded-circle header-desktop-profilepic "
      />
      
      <div className="dropdown"><a
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
      
      </div>
      
      </div>
      
      <div className="col-md-6">
      
      <input placeholder="ابحث عن معلمين, دورات ,أوراق عمل"
      type="text"
      className="form-control custom-control-text2 header-input"
      style={{color: "white", opacity: 1}}/>
      
      </div><ul className="navbar-nav ml-auto col-md-2"><div
      className="navbar-brand"><div
      className="container">
      
      <div className="row"><img
      src={path}
      alt="" 
      className="rounded-circle" 
      style= {{width:50,
      height:50}}/>
      
      
      </div>
      
      </div>
      
      </div>
      
      
      
      </ul>
      
      
      
      
      </nav>
      
      
      
      
      
      );
      
      }
      
      


}

export default NavBar;