import React, {Component} from 'react';
import Search from '../Home/Search';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class Venue extends Component{
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
                 <div className="row h-750">

                    {/** LEFT **/}
                    <div className="col-md-4 col-xs-4">
                            <div className="row"><div className="col-md-12 col-xs-12">VENUE TYPE</div></div>
                    </div>

                     {/** RIGHT **/}
                     <div className="col-md-8 col-xs-8">
                        <Map google={this.props.google} zoom={14}>
    
                            <Marker onClick={this.onMarkerClick} name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                               
                            </InfoWindow>
                        </Map>

                     </div>

                </div>

               

            </div>
            );
        }

    }

    export default GoogleApiWrapper({
        apiKey: ("AIzaSyCaK1RXDDQIzliD7qLnMMLqjZbYsHLyJTQ")
      })(Venue)