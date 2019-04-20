import React, {Component} from 'react';

export default class Payment extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const payload= {
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
      }
        )
      .catch((error) => { console.log(error);});

    }

    render(){
        return(
            <div>Thank you</div>
            );
        }
    }