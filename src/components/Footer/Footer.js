import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component{


    render(){

       return(
        <div className="footer-bottom">
        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="copyright-text">
                                        <p>CopyRight © 2017 Digital All Rights Reserved</p>
                                    </div>
                                </div> 
                                <div className="col-sm-6">							
                                    <ul className="social-link pull-right">
                                        <li><a href="https://www.facebook.com/Evntxz-416532625564591/?modal=admin_todo_tour"><span className="fab fa-facebook-square"></span></a></li>						
                                        <li><a href="https://www.instagram.com/evntxzinc"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCKdDQITIDtSHBqelWCXjd5g?disable_polymer=true"><span className="fab fa-youtube"></span></a></li>
                                    </ul>							
                                </div> 
                            </div>
                        </div>
        </div>
       );

    }
}