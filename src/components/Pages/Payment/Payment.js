import React, {Component} from 'react';
import Loading from 'react-fullscreen-loading';
import {properties} from '../../../properties';

export default class Payment extends Component{


    componentDidMount() {

        const payload= {
            cartID: "5c7926c6d610e309f8d1716d",
            paymentAuthorize: "PAYPAL",
            purchaseSum:"29.50"
        }
        
       fetch(properties.paymentserviceurl+'/api/purchase/purchase', {
        method: 'POST',
        crossDomain:true,
        mode:"cors",
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    },
        body:  JSON.stringify(payload)
      })
      .then(response =>response.json())
      .then( data=>{
          console.info(data);
       var redirect=data.Message.split(":")
       console.info(redirect);
       window.location.replace(redirect[1]+":"+redirect[2]);

      }
        )
      .catch((error) => { console.log(error);});

    }

    render(){
        return(
            <Loading loading background="#FFFFFF" loaderColor="#3498db" />
            );
        }
    }