import React, {Component} from 'react';
import './Home.css';


export default class Results extends Component{

    constructor(props) {
        super(props);

        this.state = {
            products:[]
        }
        this.handleAddWishlist= this.handleAddWishlist.bind(this);
      }

      handleAddWishlist = (prodid)=>{

        //check if logged-in
        const isAuth=localStorage.getItem("isAuth");
        const authToken=localStorage.getItem("authToken");

        const data = {
            productID: prodid,
            userID: authToken
       }
        
        if(isAuth){
            if(authToken===null || authToken===undefined){
                window.location.replace("http://localhost:8080/checkout");
            }else{

                fetch('http://localhost:8000/api/wishlist/addtowishlist', {
                    method: 'POST',
                    crossDomain:true,
                    mode:"cors",
                    headers: { 'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                    body:  JSON.stringify(data)
                  })
                  .then(response =>response.json())
                  .then( data=>{
                      console.info(data);
                  }
                    )
                  .catch((error) => { console.log(error);});

            }
        }else{
            window.location.replace("http://localhost:8080/checkout");
        }
      

      }

      componentDidMount() {
        fetch('http://localhost:8000/api/product/listlatestproducts',{
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

        return(
            <div className="container pb-5">
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
                                <li><a href="#" data-tip="Add to Wishlist" onClick={()=>{this.handleAddWishlist(prod.iD)}}><i class="fa fa-shopping-bag"></i></a></li>
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
   
        );
    }
}