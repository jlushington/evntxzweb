import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Steps} from 'antd';

//import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions'
//import Recipe from './Recipe';

import "antd/dist/antd.css";
import {InputNumber} from 'antd';

const Step = Steps.Step;

const steps = [
    {title: 'Cart'}, 
    {title: 'Checkout'}, 
    {title: 'Payment'}
];

class Cart extends Component{

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
        this.handleClick= this.handleClick.bind(this);
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

    handleClick = ()=>{

        const isAuth=localStorage.getItem("isAuth");
        const authToken=localStorage.getItem("authToken");
        console.info(isAuth);
        console.info(authToken);

  
        if(isAuth){
            if(authToken===null || authToken===undefined){
                window.location.replace("http://localhost:8080/checkout");
            }else{
                window.location.replace("http://localhost:8080/payment");  
            }
        }else{
            window.location.replace("http://localhost:8080/checkout");
        }
      

        
  
    }

    render(){
        const { current } = this.state;
        const min=1;
        const max=10;
        //const defaultvalue=1;
        const items = this.props.items;

        let totalAmount=0;

        for(let i=0; i<items.length; i++){

            totalAmount=items[i].quantity*items[i].ticket.ticketPricingAmount;
        }
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
                                    <div class="card-body text-left">
                                        <div className="row"><div className="col-md-12 col-sm-12 font-bold font-125 p-b-50">SUMMARY</div></div>
                                        <div className="row"><div className="col-md-8 col-sm-8 p-b-25">SUBTOTAL</div><div className="col-md-4 col-sm-4">USD ${totalAmount}.00</div></div>

                                        <div className="row"><div className="col-md-12 col-sm-12">TAX</div></div>
                                        <div className="row"><div className="col-md-12 col-sm-12 p-b-100 font-75">Standard tax rates will be applied based on the province/territory that you are shipping to.</div></div>

                                        <div className="row"><div className="col-md-8 col-sm-8 p-b-50">SUBTOTAL</div><div className="col-md-4 col-sm-4">USD ${totalAmount}.00</div></div>

                                        <div className="row"><div className="col-md-10 col-sm-10 font-75 color-white font-light">
                                            <button onClick={()=>{this.handleClick()}}>CHECKOUT</button>
                                        </div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/** LEGAL INFO**/}
                        <div className="row p-t-25">
                            <div className="col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="card-body  text-left">
                                        <div className="row"><div className="col-md-12 col-sm-12 font-bold font-125 p-b-50">Important Anti-Resale Policy</div></div>
                                        <div className="row"><div className="col-md-12 col-sm-12 font-75 p-b-25">
                                        Museum of Ice Cream is working hard to eliminate scalpers who are preventing our fans from affordably joining us on this incredible journey. 
                                        Tickets are non-transferable, non-exchangeable, non-refundable and absolutely cannot be resold.  The names on the tickets cannot be changed. 
                                        One member of your party must have a valid photo ID that matches at least one name on the tickets being used by your party. You cannot bring 
                                        another person's photo ID or bring a photocopy of someone else's ID. Tickets are available via mobile delivery and will call only and cannot 
                                        be resold via any secondary provider.  ShowClix is the only authorized provider of Museum of Ice Cream tickets.  If you sell or buy a ticket 
                                        on the secondary market, please be advised that MOIC reserves the right to cancel that ticket at any time without a refund.  </div></div>
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