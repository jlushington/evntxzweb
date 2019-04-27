import React, {Component} from 'react';

export default class Payment extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const payload= {
            cartID: "5c7926c6d610e309f8d1716d",
            paymentAuthorize: "PAYPAL",
            purchaseSum:"29.50"
        }
        
       fetch('http://localhost:8002/api/purchase/purchase', {
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
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            );
        }
    }