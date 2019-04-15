import React, {Component} from 'react';
import './Home.css';


export default class Results extends Component{

    constructor(props) {
        super(props);

        this.state = {
            products:[]
        }
      }

      componentDidMount() {
        console.info("this is that");
        fetch('http://productservices.jx-staging.35.231.104.48.nip.io/api/product/listlatestproducts',{
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
        const prods = this.state.products;
        console.info(prods);

        return(
            <div className="container pb-5">
            <div className="row">
            {
                prods.map(prod => 
                <div className="col-md-3 col-sm-6 p-0 h-100">
                    <div className="product-grid ">
                        <div className="product-image">
                            <a href={"http://evntxzweb.jx-staging.35.231.104.48.nip.io/"+prod.iD}>
                                {
                                prod.eventImage.map(imgd => 
                                    <img className="pic-1" src={imgd.imageLoc}  alt="image001"/>
                                )}
                            </a>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            {/*
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">20%</span>
                            */}
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href={"http://evntxzweb.jx-staging.35.231.104.48.nip.io/"+prod.iD}>{prod.eventName}</a></h3>
                            <div className="price">{prod.eventPricing[0].ticketPricingCurrency} ${prod.eventPricing[0].ticketPricingAmount}.00
                                {/*<span>$20.00</span>*/}
                            </div>
                            <a className="add-to-cart" href={"http://evntxzweb.jx-staging.35.231.104.48.nip.io/"+prod.iD}>+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                 )}
                
            </div>
        </div>
   
        );
    }
}