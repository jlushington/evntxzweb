import React, {Component} from 'react';
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
                                <li><a href="{#}">Home</a></li>
                                <li><a href="{#}">News</a></li>
                                <li><a href="{#}">Contact</a></li>
                                <li><a className="active" href="#about">About</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 font-logo">Evntxz</div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </header>
        );
    }
}