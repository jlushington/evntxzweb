import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Steps, Button, message } from 'antd';

import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions'
import Recipe from './Recipe';

import "antd/dist/antd.css";
import {InputNumber} from 'antd';

const Step = Steps.Step;

const steps = [
    {title: 'Cart'}, 
    {title: 'Login'}, 
    {title: 'Payment'}
];

class Cart extends Component{

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
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


    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        const { current } = this.state;
        const min=1;
        const max=10;
        const defaultvalue=1;

        
        console.info(this.props);
        const items = this.props.items;
        console.info("items");
        console.info(items);
        return(
            <div className="container p-t-100 p-b-100">

                  {/** CART BREADCRUMB **/}
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <Steps current={current}>{steps.map(item => <Step key={item.title} title={item.title} />)}</Steps>
                    </div>
                  </div>


                  <div className="row  p-t-50">

                     {/** CART INFORMATION**/}
                    <div className="col-md-8 col-sm-8">

                        {/** CART TITLE**/}
                        <div className="row">
                            <div className="col-md-12 col-sm-12 font-regular font-125 text-left p-b-25">Your Cart</div>
                        </div>

                        {/** CART BODY**/}
                        <div className="row">
                            <div className="col-md-12 col-sm-12 font-regular font-75">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Qantity</th>
                                            <th scope="col">Sub Totals</th>
                                        </tr>
                                    </thead>
                        
                                    <tbody>
                                        {console.info("cart02")}
                                        {console.info( this.props.items)}
                                        {
                                            items.map(item =>
                                               
                                        <tr>
                                            <td class="w-25">  <img class="d-block w-100" src={item.product.eventImage[0].imageLoc}  alt="First slide" /></td>
                                            <td class="font-regular font-75 text-left">
                                                <div className="row"><div className="col-md-12 col-sm-12  font-100">{item.product.eventName}</div></div>
                                                <div className="row"><div className="col-md-12 col-sm-12">{item.product.eventDescription.substring(0,100)}...</div></div>
                                                <div className="row"><div className="col-md-12 col-sm-12 p-t-50">Remove Item</div></div>
                                            </td>
                                            <td>${item.ticket.ticketPricingAmount}.00 </td>
                                            <td><InputNumber min={min} max={max} defaultValue={item.quantity} onChange={this.handleChange}/></td>
                                            
                                            <td>{item.ticket.ticketPricingAmount * item.quantity}</td>
                                        </tr>
                                        )
                                    }
                                    </tbody>
                           
                                </table>
                              
                            </div>
                        </div>
                    </div>

                     {/** CART SUMMARY & LEGAL INFO **/}
                     <div className="col-md-4 col-sm-4">

                        {/** CART SUMMARY  **/}
                        <div className="row p-t-50">
                            <div className="col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        This is some text within a card body.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/** LEGAL INFO**/}
                        <div className="row p-t-25">
                            <div className="col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        This is some text within a card body.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                  </div>


            </div>
        )
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
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)