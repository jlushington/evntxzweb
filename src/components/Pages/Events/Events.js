import React, {Component} from 'react';
import Search from '../Home/Search'


export default class Events extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="container p-b-100">
                {/** HEADER SEARCH **/}
                <div className="row">
                    <Search />
                </div>

                {/** BODY **/}
                <div className="row">

                    {/** LEFT **/}
                    <div className="col-md-4 col-xs-4">
                        <div className="row"><div className="col-md-12 col-xs-12">VENUE TYPE</div></div>
                    </div>

                    {/** RIGHT **/}
                    <div className="col-md-8 col-xs-8">

                        <div className="row"><div className="col-md-12 col-xs-12">VENUE TYPE</div></div>

                        <div className="row">

                            <div className="col-md-3 col-sm-6 p-0 h-100">
                                <div className="product-grid ">
                                    <div className="product-image">
                                        <a href={"http://localhost:8080/productdetail/"}>

                                        </a>
                                        <ul className="social">
                                            <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                            <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                            <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>

                                    </div>
                                    <div className="product-content">
                                        <h3 className="title"><a href="http://localhost:8080/productdetail/">Product Name</a></h3>
                                        <div className="price">$35.00
                                            {/*<span>$20.00</span>*/}
                                        </div>
                                        <a className="add-to-cart" href="http://localhost:8080/productdetail/">+ Add To Cart</a>
                                    </div>
                                </div>
                            </div>
               
                        </div>

                    </div>

                </div>


            </div>
            );
        }
}