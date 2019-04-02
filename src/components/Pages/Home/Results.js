import React, {Component} from 'react';
import './Home.css';


export default class Results extends Component{

    render(){
        return(
            <div className="container pb-5">
            <div className="row">
                <div className="col-md-3 col-sm-6 p-0">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href={"#"}>
                                <img className="pic-1" src="https://cdn.pixabay.com/photo/2012/03/03/23/05/brown-21528_1280.jpg" />
                                <img className="pic-2" src="https://cdn.pixabay.com/photo/2016/08/01/11/32/live-bands-1560877_1280.jpg" />
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
                            <h3 className="title"><a href="{#}">Concert 1</a></h3>
                            <div className="price">$16.00 -$150.00
                                {/*<span>$20.00</span>*/}
                            </div>
                            <a className="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 p-0">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href="#">
                                <img className="pic-1" src="https://cdn.pixabay.com/photo/2012/03/03/23/05/brown-21528_1280.jpg" />
                                <img className="pic-2" src="https://cdn.pixabay.com/photo/2016/08/01/11/32/live-bands-1560877_1280.jpg" />
                            </a>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                             {/*
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">50%</span>
                             */}
                        </div>

                        <div className="product-content">
                            <h3 className="title"><a href="#">Concert 2</a></h3>
                            <div className="price">$5.00
                                {/*<span>$10.00</span>*/}
                            </div>
                            <a className="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 p-0">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href="#">
                                <img className="pic-1" src="https://cdn.pixabay.com/photo/2012/03/03/23/05/brown-21528_1280.jpg" />
                                <img className="pic-2" src="https://cdn.pixabay.com/photo/2016/08/01/11/32/live-bands-1560877_1280.jpg" />
                            </a>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                             {/*
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">50%</span>
                             */}
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="#">Concert 3</a></h3>
                            <div className="price">$5.00
                                {/*<span>$10.00</span>*/}
                            </div>
                            <a className="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 p-0">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href="#">
                                <img className="pic-1" src="https://cdn.pixabay.com/photo/2012/03/03/23/05/brown-21528_1280.jpg" />
                                <img className="pic-2" src="https://cdn.pixabay.com/photo/2016/08/01/11/32/live-bands-1560877_1280.jpg" />
                            </a>
                            <ul className="social">
                                <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                             {/*
                            <span className="product-new-label">Sale</span>
                            <span className="product-discount-label">50%</span>
                             */}
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a href="#">Concert 4</a></h3>
                            <div className="price">$5.00
                                {/*<span>$10.00</span>*/}
                            </div>
                            <a className="add-to-cart" href="">+ Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        );
    }
}