import React, {Component} from 'react';


export default class Search extends Component{

    render(){
        return(
            <div className="container pt-5">
                <div className="row pt-3">
                    <div className="col-sm-12 searchnav">
                            <ul>
                                <li><a href="{#}">CONCERT</a></li>
                                <li><a href="{#}">EVENTS</a></li>
                                <li><a href="{#}">MEETUP</a></li>
                                <li><a href="{#}">EATS</a></li>
                            </ul>
                        </div>
                </div>
                <div className="row pt-3">
                    <div className="col-sm-6"><input type="text" placeholder="Enter some text" required /></div>
                    <div className="col-sm-4"><input type="text" placeholder="Enter some text" required /></div>
                    <div className="col-sm-2"><button>Submit</button></div>
    
                </div>
            </div>
        );
    }

}