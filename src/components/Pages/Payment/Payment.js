import React, {Component} from 'react';
import { connect } from 'react-redux'
import Loading from 'react-fullscreen-loading';
import {properties} from '../../../properties';

class Payment extends Component{

    constructor(props) {
        super(props);
      }


    componentDidMount() {

        console.info(this.props);
        const items = this.props.items;
        

        let totalAmount=0;

        for(let i=0; i<items.length; i++){

            totalAmount=(totalAmount+(items[i].quantity*items[i].ticket.ticketPricingAmount));
        }

        const cartID=localStorage.getItem("localCartID");
    

        const payload= {
            cartID: cartID,
            paymentAuthorize: "PAYPAL",
            purchaseSum:totalAmount
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
      .catch((error) => { 
          //Issue connecting to Purchase Service
          /*
          0-Purchase Services Unaviable 
          */

          console.info("this is an error")
          console.log(error);
          window.location.replace(properties.weburl+"/paymentcancel/0");
        });

    }

    render(){
        return(
            <Loading loading background="#FFFFFF" loaderColor="#3498db" />
            );
        }
    }

    const mapStateToProps = (state)=>{
        return{
            items: state.addedItems,
            //addedItems: state.addedItems
        }
    }
    const mapDispatchToProps = (dispatch)=>{
        return{
    
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Payment)