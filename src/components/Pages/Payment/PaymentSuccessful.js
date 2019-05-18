import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/cartActions';
import {Steps} from 'antd';
import {properties} from '../../../properties';


const Step = Steps.Step;

const steps = [
    {title: 'Cart'}, 
    {title: 'Checkout'}, 
    {title: 'Thank You'}
];

class PaymentSuccess extends Component{

    constructor(props) {
        super(props);
        this.state = {
          current: 2,
        };
    }

    parseurl(){
        var str = window.location.search;
        var objURL = {};

        str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;

    }
    componentDidMount() {

        //CHECK IF PAYPAL PAYMENT IS SUCCESSFUL
        var params = this.parseurl();
        const payload ={
            paymentID: params["paymentId"],
            paymentToken: params["token"],
            payerID: params["PayerID"]

        }

        fetch(properties.paymentserviceurl+'/api/purchase/purchasesuccessful', {
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
                //CLEAR REDUX
                const blank={};
                console.info("PaymentSuccess->componentWillUnmount");
                this.props.clearCart(blank);

                //UPDATE CART STATUS
                var milliseconds = (new Date).getTime();
                const localCartID=localStorage.getItem("localCartID");
                const paydata = {
                    cartID:localCartID,
                    dateUpdated:milliseconds,
                    cartStatus:'Purchase',
                   
                };

                fetch(properties.cartserviceurl+'/api/cart/updatecart', {
                    method: 'POST',
                    crossDomain:true,
                    mode:"cors",
                    headers: { 'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                    body:  JSON.stringify(paydata)
                  })
                  .then(response =>response.json())
                  .then( data=>{
                      if(data.MessageTypeID===0){
                          console.info(data);

                      }else{
                        localStorage.removeItem("localCartID");
                    }
                    
                  })
                  .catch((error) => { console.log(error);});
                
          })
          .catch((error) => { console.log(error);});

    }



    render(){
        const { current } = this.state;

        return(
            <div className="container p-t-100 p-b-100">
                  {/** CART BREADCRUMB **/}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <Steps current={current}>{steps.map(item => <Step key={item.title} title={item.title} />)}</Steps>
                    </div>
                  </div>

                <div className="row p-t-50">
                    <div className="col-md-12 col-xs-12">
                        <h1>THANK YOU</h1>
                    </div>
                </div>

                <div className="row p-b-50">
                    <div className="col-md-12 col-xs-12">
                        <i class="fas fa-check font-400 color-green"></i>
                    </div>
                </div>

                <div className="row  p-b-50">
                    <div className="col-md-12 col-xs-12">
                        You Ticket has been purchase Could you accessed Via Account Section 
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        TERM & CONDITION
                    </div>
                </div>
            </div>

            );
        }
    }

    const mapStateToProps = (state)=>{
        return {
          items: state.items
        }
      }
    const mapDispatchToProps= (dispatch)=>{
    
        return{
            clearCart: (prod)=>{dispatch(clearCart(prod))}
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(PaymentSuccess)