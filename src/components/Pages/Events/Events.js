import React, {Component} from 'react';
import Search from '../Home/Search'
import {Checkbox} from 'antd';
import {properties} from '../../../properties';


export default class Events extends Component{
    constructor(props) {
        super(props);
        this.state = {
            venuetype:[],
            products:[]
        }
    }

    componentDidMount() {
        fetch(properties.locationserviceurl+'/api/locationtype/getalllocationtype',{
            crossDomain:true,
            mode:"cors",
            headers: { 'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
        })
        .then(response=>{
            return response.json();
        }).then(data=>{
            console.info(data);
            this.setState({venuetype: data});
        }).catch((error) => {
            console.log("error");
        });

        fetch(properties.productserviceurl+'/api/product/listlatestproducts',{
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

            this.setState({products: data});
        }).catch((error) => {
            console.log("error");
        });

    }

    render(){

        const venuetypes = this.state.venuetype;
        const prods = this.state.products;
        return(
            <div className="container p-b-100">
                {/** HEADER SEARCH **/}
                <div className="row">
                    <Search />
                </div>

                {/** BODY **/}
                <div className="row">

                    {/** LEFT **/}
                    <div className="col-md-3 col-xs-3 float-left text-left">
                        <div className="row"><div className="col-md-12 col-xs-12"><h2>VENUE TYPE</h2></div></div>
                        {
                        venuetypes.map(venuetype => 
                            <div className="row p-b-10"><div className="col-md-12 col-xs-12"><Checkbox>{venuetype.locationTypeName}</Checkbox></div></div>
                        )}

                    </div>

                    {/** RIGHT **/}
                    <div className="col-md-9 col-xs-9">


                    <div className="row">
            {
                prods.map(prod => 
                <div className="col-md-3 col-sm-6 p-0 h-100">
                    <div className="product-grid ">
                        <div className="product-image">
                            <a href={"http://localhost:8080/productdetail/"+prod.iD}>
                                {
                                prod.eventImage.map(imgd => 
                                    <img className="pic-1" src={imgd.imageLoc}  alt="image001"/>
                                )}
                            </a>
                            <ul className="social">
                                <li><a href="" data-tip="Location"><i class="fas fa-map-marker-alt"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist" onClick={()=>{this.handleAddWishlist(prod.iD)}}><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href={"http://localhost:8080/productdetail/"+prod.iD} data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            {/*
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">20%</span>
                            */}
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href={"http://localhost:8080/productdetail/"+prod.iD}>{prod.eventName}</a></h3>
                            <div className="price">{prod.eventPricing[0].ticketPricingCurrency} ${prod.eventPricing[0].ticketPricingAmount}.00
                                {/*<span>$20.00</span>*/}
                            </div>
                            <a className="add-to-cart" href={"http://localhost:8080/productdetail/"+prod.iD}>+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                 )}
                
            </div>







                    </div>

                </div>


            </div>
            );
        }
}