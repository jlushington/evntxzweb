import React, {Component} from 'react';
import './Home.css';


export default class Latest extends Component{

    constructor(props) {
        super(props);

        this.state = {
            products:[]
        }
      }


    componentDidMount() {
        fetch('http://localhost:8000/api/product/list3latest',{
            crossDomain:true,
            mode:"cors",
            headers: { 'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
        }
        
        
        )
        .then(response=>{
            return response.json();
        }).then(data=>{
            console.info(data);
            this.setState({products: data});
        }).catch((error) => {
            console.log("error");
        });
      }


    render(){
        const prods = this.state.products;
        return(
             <div className="row pt-3">

{
                  
                  prods.map(prod =>

             <div className="col-sm-4 text-left">
                 <div className="row"><div className="col-sm-4 text-left font-light color-red font-125">MAY</div></div>
                 <div className="row">
                     <div className="col-sm-1 text-left font-light color-red font-125">24</div>
                     <div className="col-sm-5 text-left"><img height="100px" src={prod.eventImage[0].imageLoc} alt="{Los Angeles}" /></div>
                     <div className="col-sm-6 text-left">
                         <div className="row"><div className="col-sm-12 text-left font-regular font-100">{prod.eventName}</div></div>
                         <div className="row"><div className="col-sm-12 text-left ont-regular font-75">{prod.eventDescription.substring(0 ,45)}...</div></div>
                     </div>
                 </div>
             </div>
                  )}


            
           
         </div>
        );
    }

}