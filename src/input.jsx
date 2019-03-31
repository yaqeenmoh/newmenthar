import React, {Component} from 'react';
import './App.css';
import Magn from './icons/other/magn.svg';


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
<p style={{color:"black" , textAlign:"center" , width : 800}}>مرحبا بك في منظار </p>
<p style={{color:"black" , textAlign:"center"}} className="img-text">منظار هي اول و أقوى برمجية تتيح للطالب معرفة التخصصات الجامعية في الأردن في كل من الجامعات الحكومية و الخاصة حسب معدل الطالب المتوقع أو الحقيقي وتمكنه من معرفة خيارات تقريبية للتخصصات الجامعية التي تناسبه من حيث المعدل الشخصية مكان السكن و التكلفة المادية </p>
<br/>

<form onSubmit={this.handleSubmit} style={{marginLeft:50}} >
<h4 style={{width:800 ,marginBottom:20, marginLeft:-20 }}>هل تبحث عن تخصص معين</h4>
<div className="row" style={{marginLeft:30}}>
<div class="col-md-1 input-col search-input">
<img style={{width:20,height:20 , marginLeft:10}} src={Magn}/>

<span className="search-text"> إبحث</span>
</div>
<div className="col-md-3 input-col">

<input type="search"
className="form-control custom-control-text"
         placeholder="بحث عن تخصص حسب"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
    </div>

       <div class="col-md-3 input-col">
       <input type="search"
className="form-control custom-control-text2"
         placeholder="بحث عن تخصص حسب"
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       </div>
       </div>
 
        <p>{this.state.text}</p>

<div>
  <div className="row">
  <div className="col-md-4 s-btn">
<button className="search-btn">ابحث عن تخصصات حسب شخصيتي <img style={{width:20,height:20 , marginLeft:10}} src={Magn}/></button>
</div>
<div className="col-md-4 s-btn">
<button className="search-btn">ابحث عن تخصصات حسب شخصيتي <img style={{width:20,height:20 , marginLeft:10}} src={Magn}/></button>
</div>
</div>
</div>
                </form>
                
                
                
                </div>
            
        );
    }
}