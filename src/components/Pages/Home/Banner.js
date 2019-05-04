import React, {Component} from 'react';
import {properties} from '../../../properties';


export default class Banner extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            products:[]
        }
      }
    
      componentDidMount() {
        console.info("Banner->componentDidMount");
        fetch(properties.productserviceurl+'/api/product/list3latestimages',{
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
            console.info("Banner->componentDidMount->response");
            this.setState({products: data});
        }).catch((error) => {
            console.log("error");
        });
      }

    render(){
        const prods = this.state.products;
        console.info(prods);
        return(
            <div className="row pt-3">
            <div className="col-sm-1 social text-left pr-2">
                <ul>
                    <li className="fab fa-facebook-square pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                    <li className="fab fa-twitter-square pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                    <li className="fab fa-instagram pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                    <li className="fab fa-youtube pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                </ul>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-8 pb-3">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    {
                  
                  prods.map(prod =>
                        <div className="carousel-item active"><img height="350px" className="d-block w-100" src={prod.imageLoc} alt="{Los Angeles}" /></div>
                  )}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}