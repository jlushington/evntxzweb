import React, {Component} from 'react';

export default class PaymentCancel extends Component{

    render(){
        return(
            <div className="container p-t-100  p-b-100">
                <div className="row justify-content-center">
                <div className="col-md-8 col-xs-8">
                      {/*LOGIN TITLE*/}
                      <div className="row">
                           <div className="col-md-12 col-xs-12 font-125 font-bold p-b-25">Payment Cancelled</div>
                        </div>

                         {/*LOGIN BODY*/}
                         <div className="row align-left">
                            <div className="col-md-12 col-xs-12">
                            <div className="row"><div className="col-md-12 col-xs-12 font-75 font-regular p-b-25 p-t-25">There was an issues processing your payment admin has been notified and will send you an email updating of that status.</div></div>
                            </div>
                         </div>
                </div>
                </div>
            </div>
            );
        }
    }