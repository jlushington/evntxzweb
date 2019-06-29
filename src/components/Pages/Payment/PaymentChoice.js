import React, {Component} from 'react';
import {Steps} from 'antd';
import {properties} from '../../../properties';

import "antd/dist/antd.css";

const Step = Steps.Step;

const steps = [
    {title: 'Cart'}, 
    {title: 'Checkout'}, 
    {title: 'Thank You'}
];


export default class PaymentChoice extends Component{

    constructor(props) {
        super(props);
        this.state = {
            current: 1,
          };
      }

      handleClick = ()=>{

        const isAuth=localStorage.getItem("isAuth");
        const authToken=localStorage.getItem("authToken");
  
        if(isAuth){
            if(authToken===null || authToken===undefined){
                window.location.replace(properties.weburl+"/checkout");
            }else{
                window.location.replace(properties.weburl+"/payment");  
            }
        }else{
            window.location.replace(properties.weburl+"/checkout");
        }
    }

      render(){
        const { current } = this.state;
        const items = this.props.items;

        return(
        <div className="container p-t-100 p-b-100">

            {/** CART BREADCRUMB **/}
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <Steps current={current}>{steps.map(item => <Step key={item.title} title={item.title} />)}</Steps>
                </div>
            </div>

            <div className="row p-t-50">

                <div className="col-md-8 col-sm-8">

                    {/** CART TITLE**/}
                     <div className="row">
                        <div className="col-md-12 col-sm-12 font-regular font-125 text-left p-b-25">Checkout Payment</div>
                    </div>

                    {/** CART BODY**/}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 font-regular font-75">

                            <div className="row">
                                <div className="col-md-12 col-sm-12 font-regular font-75">
                                    <button onClick={()=>{this.handleClick()}}>
                                        <i class="fab fa-paypal font-400 color-blue"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-sm-12 font-regular font-75">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="p-b-25">
                                            <div className="font-75 font-regular align-left text-left">CC Number</div>
                                            <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChange}/>
                                        </div>
                                        <div className="p-b-25">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 font-regular font-75">
                                                    <div className="font-75 font-regular align-left text-left"> CVV </div>
                                                    <input id="password" name="password" type="password" onChange={this.handleChange} />
                                                </div>
                                                <div className="col-md-6 col-sm-6 font-regular font-75">
                                                    <div className="font-75 font-regular align-left text-left"> CC Exp</div>
                                                    <input id="password" name="password" type="password" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div align="center">
                                            <button className="font-75 color-white">Process Payment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
        );
      }
}

