import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Avatar, Badge} from 'antd';
import './Header.css';

class Header extends Component{

    render(){
        const items = this.props.items;

        var cartQuantity=0;

        for(let i=0; i<items.length; i++){
            cartQuantity=cartQuantity+items[i].quantity;
            }

        return(
            <header className="masthead mb-auto">
                <div className="container">

                {/* HEADER NAV */}
                    <div className="row">
                        <div className="col-sm-4 text-left pt-3 navigation">
                            <ul>
                                <li className="fas fa-align-justify pt-3 color-grey"><a href="{#}">&nbsp;</a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/venue">Venue</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 font-logo">Evntxz</div>
                            <div className="col-sm-4 text-left pt-3 navigation">
                                <ul>
                                    <li><a href="/signup">Signup</a></li>
                                    <li><a className="active" href="/login">Login</a></li>
                                    <li className="fas color-grey">
                                        <a href="/cart"><span style={{ marginRight: 24 }}><Badge count={cartQuantity}><Avatar shape="square" icon="shopping-cart" /></Badge></span></a>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)