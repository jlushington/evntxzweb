import React, {Component} from 'react';
import {Avatar, Badge} from 'antd';
import './Header.css';

export default class Header extends Component{

    render(){
        return(
            <header className="masthead mb-auto">
                <div className="container">

                {/* HEADER NAV */}
                    <div className="row">
                        <div className="col-sm-4 text-left pt-3 navigation">
                            <ul>
                                <li className="fas fa-align-justify pt-3 color-grey"><a href="{#}">&nbsp;</a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="{#}">Events</a></li>
                                <li><a href="{#}">Venue</a></li>
                                <li><a href="{#}">Help</a></li>

                            </ul>
                        </div>
                        <div className="col-sm-4 font-logo">Evntxz</div>
                            <div className="col-sm-4 text-left pt-3 navigation">
                                <ul>
                                    <li><a href="/signup">Signup</a></li>
                                    <li><a className="active" href="#about">Login</a></li>
                                    <li className="fas color-grey">
                                        <a href="/cart"><span style={{ marginRight: 24 }}><Badge count={1}><Avatar shape="square" icon="shopping-cart" /></Badge></span></a>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                </div>
            </header>
        );
    }
}