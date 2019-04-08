import React, {Component} from 'react';
import './App.css';
import Magn from './icons/other/magn.svg';
import Brain from './icons/other/2/brain.svg'
import icc from './icons/other/2/icon.svg'
import magnify from './icons/other/2/magnifying-glass.svg'

export default class Input extends Component {




    constructor(props) {
        super(props);
        this.state = {text: ''};
    
      }

      
      handleInputChange = () => {
        this.setState({
            text: this.search.value
        })
      }
      
    
     
    render() {
        return (
            <div>
            
                <br/>
<p style={{color:"black" , textAlign:"center" , width : 800 , marginLeft:"auto", marginRight:"auto"}}>مرحبا بك في منظار </p>
<p style={{color:"black" , textAlign:"center" , marginLeft:"auto", marginRight:"auto"}} className="img-text">منظار هي اول و أقوى برمجية تتيح للطالب معرفة التخصصات الجامعية في الأردن في كل من الجامعات الحكومية و الخاصة حسب معدل الطالب المتوقع أو الحقيقي وتمكنه من معرفة خيارات تقريبية للتخصصات الجامعية التي تناسبه من حيث المعدل الشخصية مكان السكن و التكلفة المادية </p>
<br/>

<form onSubmit={this.handleSubmit} style={{marginLeft:"auto", marginRight:"auto"}} >
<h4 style={{width:800 ,marginBottom:20, marginLeft:-20 , marginLeft:"auto", marginRight:"auto" }}>هل تبحث عن تخصص معين</h4>
<div className="row" style={{marginLeft:250,position:"relative"}}>
<div class="col-md-1 input-col search-input">

<span className="search-text" style={{
fontFamily: "Noto Kufi Arabic",
fontWeight: "normal",
fontSize: 20,
color: "#fff",
background: "#034173",
width: 48.01,
height: 32.3,
float: "right"

}}> إبحث</span>
<a style={{position:"absolute",    bottom: 10,right:52,background: "transparent"}}
     href="#">
     <img 
     
     src={magnify}/>
    
     </a>

    


</div>

<div className="col-md-4 input-col">


<input type="search"
className="form-control custom-control-text" style={{background:" #fff",color:" #d1d1d1",fonFamily: "Noto Kufi Arabic",fontWeight:"normal",textAlign:"right"}}
         placeholder=" أين تريد أن تدرس (البلد،الجامعة)؟    "
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
    </div>

       <div class="col-md-4 input-col">
       <input type="search"
className="form-control custom-control-text" style={{background:" #fff",color:" #d1d1d1",fonFamily: "Noto Kufi Arabic",fontWeight:"normal",textAlign:"right"}}
         placeholder  ="  ماذا تريد أن تدرس (التخصص) ؟ "
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       </div>
       </div>
 
        <p>{this.state.text}</p>
   

<div>
  <div className="row" >
  <div className="col-md-4 s-btn" style={{fontFamily: "Noto Kufi Arabic",fontSize: 18,color:" #034173"}}>
<button className="search-btn" >ابحث عن تخصصات حسب شخصيتي <img style={{width:20,height:29.44 , marginLeft:10,background: "transparent"}} src={icc}/></button>
</div>
<div className="col-md-4" style={{fontFamily: "Noto Kufi Arabic",fontSize: 18,color:" #d1d1d1"}}>
<button className="search-btn">
ابحث عن تخصصات حسب معدلي<img style={{width:20,height:20 , marginLeft:10,fontFamily: "Noto Kufi Arabic",fontSize: 18,color:" #195DB4",background: "transparent"}}
 src={Brain}/></button>
</div>
</div>
</div>
                </form>
                
                
               

                </div>
            
        );
    }
}