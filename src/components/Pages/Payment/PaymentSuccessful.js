import React, {Component} from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../actions/cartActions';
import {Steps} from 'antd';


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
    componentDidMount() {

        //CHECK IF PAYPAL PAYMENT IS SUCCESSFUL

        //CLEAR REDUX
        const blank={};
        console.info("PaymentSuccess->componentWillUnmount");
        this.props.clearCart(blank);

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