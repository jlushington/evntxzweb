import React, {Component} from 'react';


export default class Banner extends Component{

    render(){
        return(
            <div className="row pt-3">
            <div className="col-sm-1 social text-left pr-2">
                <ul>
                    <li className="fab fa-facebook-square pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                    <li className="fab fa-twitter-square pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                    <li className="fab fa-instagram pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                    <li className="fab fa-youtube pt-3 color-red"><a href="{#}">&nbsp;</a></li>
                </ul>
            </div>
            <div className="col-sm-11">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                   

                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="d-block w-100" src="https://dummyimage.com/750x350/ff3b3e/a9a9a9" alt="{Los Angeles}" /></div>
                        <div className="carousel-item"><img className="d-block w-100" src="https://dummyimage.com/750x350/00B2EE/a9a9a9" alt="{Los Angeles}" /></div>
                        <div className="carousel-item"><img className="d-block w-100" src="https://dummyimage.com/750x350/3063A5/a9a9a9" alt="{Los Angeles}" /></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}