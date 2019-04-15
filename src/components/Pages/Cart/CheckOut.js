import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {Steps} from 'antd';

const Step = Steps.Step;

const steps = [
    {title: 'Cart'}, 
    {title: 'Checkout'}, 
    {title: 'Payment'}
];

class CheckOut extends Component{

    constructor(props) {
        super(props);
        this.state = {
          current: 1,
        };
      }

      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

    render(){
        const { current } = this.state;
        return(

            <div className="container p-t-100 p-b-100">
                 {/** CART BREADCRUMB **/}
                 <div className="row p-b-50">
                    <div className="col-md-12 col-sm-12">
                        <Steps current={current}>{steps.map(item => <Step key={item.title} title={item.title} />)}</Steps>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    {/*LOGIN*/}
                    <div className="col-md-5 col-xs-8">
                        {/*LOGIN TITLE*/}
                        <div className="row">
                            <div className="col-md-12 col-xs-12 font-125 font-regular p-b-25">LOGIN</div>
                        </div>

                        {/*LOGIN BODY*/}
                        <div className="row bg-grey align-left">
                            <div className="col-md-12 col-xs-12">
                                <div className="row"><div className="col-md-12 col-xs-12 font-75 font-regular p-b-25 p-t-25">Please enter your email and password below to access your account</div></div>
                                <div className="row"><div className="col-md-12 col-xs-12">
                                <form onSubmit={this.handleSubmit}>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left">Email</div>
                                <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChange}/>
                            </div>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left"> Password</div>
                                <input id="password" name="password" type="password" onChange={this.handleChange} />
                            </div>
                            <div align="center">
                                <button className="btn btn-orange">Sign-In</button>
                            </div>
                        </form>
                                </div></div>
                                <div className="row"><div className="col-md-12 col-xs-12"></div></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-xs-2">&nbsp;</div>

                    <div className="col-md-5 col-xs-8">
                        {/*LOGIN TITLE*/}
                        <div className="row">
                            <div className="col-md-12 col-xs-12 font-125 font-regular p-b-25">GUEST CHECKOUT</div>
                        </div>

                        {/*LOGIN BODY*/}
                        <div className="row bg-grey align-left">
                            <div className="col-md-12 col-xs-12">
                                <div className="row"><div className="col-md-12 col-xs-12 font-75 font-regular p-b-25 p-t-25">PLease Enter all the information </div></div>
                                <div className="row"><div className="col-md-12 col-xs-12">
                                <form onSubmit={this.handleSubmit}>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left">Email</div>
                                <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChange}/>
                            </div>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left"> Password</div>
                                <input id="password" name="password" type="password" onChange={this.handleChange} />
                            </div>
                            <div align="center">
                                <button className="btn btn-orange">Make Payment</button>
                            </div>
                        </form>
                                </div></div>
                                <div className="row"><div className="col-md-12 col-xs-12"></div></div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>

        )
    }
}
export default CheckOut;