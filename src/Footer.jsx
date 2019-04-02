import React from 'react'

import { MDBTable, MDBTableBody, MDBTableHead,MDBContainer,MDBRow,MDBIcon, MDBCol } from 'mdbreact';
import playstore from './icons/playstore.svg'
import appstore from './icons/appstore.svg'
import envelope from './icons/other/2/envelope.svg'
import whatsapp from './icons/other/2/whatsapp-logo.svg'
import youtube from './icons/other/2/youtube-logo.svg'
import inst from './icons/other/2/instagram-logo.svg'
import twitter from './icons/other/2/twitter-logo-silhouette.svg'
import facebook from './icons/other/2/facebook-logo.svg'
import './footer.css';
const Footer = props => {
  return (
    <footer className="footer">
      <div className="container" >
      <div className="row">
      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <h4>من نحن</h4>
                    <ul  className="list-unstyled direction">
                        <li><a href="#">جو أكاديمي</a></li>
                        <li><a href="#">الشروط و الأحكام</a></li>
                        <li><a href="#">سياسة الخصوصية</a></li>
                        <li><a href="#">نقاط البيع</a></li>
                    </ul>


                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <h4>من نحن</h4>
                    <ul class="list-unstyled">
                        <li><a href="#">جو أكاديمي</a></li>
                        <li><a href="#">الشروط و الأحكام</a></li>
                        <li><a href="#">سياسة الخصوصية</a></li>
                        <li><a href="#">نقاط البيع</a></li>
                    </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <h4>الدعم</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">اتصل بنا</a></li>
                        <li><a href="#">الأسئلة الأكثر شيوعا</a></li>
                        <li><a href="#">منظار</a></li>
                        <li><a href="#">نقاط البيع</a></li>
                        <li><a href="#">أستاذي</a></li>
                        <li><a href="#">شبابيك</a></li>
                        <li><a href="#">ألعاب</a></li>
                        <li><a href="#">المدونة</a></li>
                    </ul>
                </div>
<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                    <h4>روابط سريعة</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">جروبات جوأكاديمي</a></li>
                        <li><a href="#">دبلومات ودورات</a></li>
                        <li><a href="#">المدارس والجامعات</a></li>
                        <li><a href="#">بنك الأسئلة</a></li>
                        <li><a href="#">احسب معدلك</a></li>
                        <li><a href="#">الجدول الدراسي</a></li>
                        <li><a href="#">معلمون</a></li>
                        <li><a href="#">كتب الوزارة وأجوبتها</a></li>
                    </ul>
                </div>
               
                
                

                <div className="apps">
                    <h4>حمل تطبيق جو أكاديمي على موبايلك</h4>
                    <a href="https://play.google.com/store/apps/details?id=tawjihi.joacademy.ns4it.newjo1"><img src={playstore}/></a>
                    <a href="#"><img src={appstore}/></a>
                </div>

                <div className="row ">
                    <div className="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <a href="https://atomkit.com/">صنع بحب <span style={{color:"red"}}> </span> Atomkit</a>

                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 social-media">
                        
                        <a href="#" style={{marginLeft: 23}}><img src={facebook}/ ></a>
                        <a href="#" style={{marginLeft: 23}}><img src={twitter}/></a>
                        <a href="#" style={{marginLeft: 23}}><img src={inst}/></a>
                        <a href="#" style={{marginLeft: 23}}><img src={youtube}/></a>
                        <a href="#"style={{marginLeft: 23}}><img src={whatsapp}/></a>
                        <a href="#"style={{marginLeft: 23}}><img src={envelope}/></a>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <p>جميع الحقوق محفوظة &copy; 2018</p>
                    </div>
                    </div>
     
</div>
    </div>
    </footer>
  );

  
}

export default Footer;
