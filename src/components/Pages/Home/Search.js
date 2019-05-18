import React, {Component} from 'react';
import "antd/dist/antd.css";


export default class Search extends Component{

    render(){
        return(
            <div className="container">
                <div className="row p-t-50">
                    <div className="col-sm-12 searchnav font-75 color-grey">
                    {/*
                            <ul>
                                <li><a href="{#}">CONCERT</a></li>
                                <li><a href="{#}">EVENTS</a></li>
                                <li><a href="{#}">MEETUP</a></li>
                                <li><a href="{#}">EATS</a></li>
                            </ul>
                    */}
                        </div>
                </div>
                <div className="row pb-5 font-75 color-lightrey font-light">
                    <div className="col-sm-6"><input type="text" placeholder="SEARCH..." required /></div>
                    <div className="col-sm-4"><input type="text" placeholder="LOCATION..." required /></div>
                    <div className="col-sm-2  pt-2">
                    <span className="pl-3 pt-2 btn-floating halfway-fab waves-effect waves-light red">
                                <a class="linkbutton font-regular font-75" href={"#"}>Submit</a>
                                </span>
                    </div>
    
                </div>
            </div>
        );
    }

}