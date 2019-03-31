import React from 'react';
import CardLayout from './CardLayout';
import card1 from './icons/Rectangle 6036.svg'
import backGround from './icons/box-background.png';


const GalleryCard = (d) => {




  return (
    <CardLayout>

      <div className="card-layout align-right">


         <p class="title">{d.data.title}</p>
        <p class="desc">{d.data.desc}</p> 
        <a style={{color:"#8D8E8E" , padding:10}} href="javascript:void(0);">إقرا المزيد</a>
      
          
          
       

        {/* <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span> */}
      </div>
    </CardLayout>
  );
};

export default GalleryCard;