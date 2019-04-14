import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import "antd/dist/antd.css";
import {InputNumber} from 'antd';
import  './style.css'

class ProductDetail extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            data:{
            iD:'',
            eventName:'',
            eventDescription:'',
            locationID:'',
            age:'',
            eventStartDate:'',
            eventEndDate:'',
            eventPricing:[],
            eventImage:[]
            },
            quantity:1
        };
        this.handleClick= this.handleClick.bind(this);
      }
      handleClick = (prod, ticket, key)=>{
        const merged={
            productdata:prod,
            ticketdata:ticket,
            quantity:this.state.quantity,
            ticketkey:key
        }
        this.props.addToCart(merged); 
    }

    handleChange = (e)=>{
        console.info(e);
        this.setState({quantity:e})
        //this.setState({ [e.target.name]: e.target.value });
      }
    
    componentDidMount() {
       const values= this.props.match.params;

       const data = {
            iD: values.iD
       }

       fetch('http://localhost:8000/api/product/getproduct', {
        method: 'POST',
        crossDomain:true,
        mode:"cors",
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
    },
        body:  JSON.stringify(data)
      })
      .then(response =>response.json())
      .then( data=>{
        this.setState({
            data:{
            iD:data.value.iD,
            eventName:data.value.eventName,
            eventDescription:data.value.eventDescription,
            locationID:data.value.locationID,
            age:data.value.age,
            eventStartDate:data.value.eventStartDate,
            eventEndDate:data.value.eventEndDate,
            eventPricing:data.value.eventPricing,
            eventImage:data.value.eventImage
            }
        }) 
      }
        )
      .catch((error) => { console.log("error");});

      }
   

    render() {

        const prod = this.state.data
        const min=1;
        const max=10;
        const defaultvalue=1;


        return (
    
            <div className="container p-t-100">
            

                {/** PRODUCT INFORMATION **/}
                <div className="row">

                    {/** PRODUCT DETAILS **/}
           
                    <div className="col-md-6 col-sm-6 text-left">
                        <div className="row"><div className="col-md-12 col-sm-12 font-regular font-125">{prod.eventName}</div></div>
                        <div className="row"><div className="col-md-12 col-sm-12 p-t-10 font-regular font-75">{prod.eventDescription}</div></div>
                        {
                            prod.eventPricing.map((pricing,i) =>
                                
                            <div>
                                <div className="row"><div className="col-md-12 col-sm-12 p-t-50 font-regular font-100">${pricing.ticketPricingAmount}.00</div></div>
                                <div className="row"><div className="col-md-12 col-sm-12"><InputNumber min={min} max={max} name="quantity" defaultValue={defaultvalue} onChange={this.handleChange}/>
                                <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(prod, pricing, i)}}><i className="material-icons"> &nbsp; ADD</i></span>
                                </div></div>
                            </div>
                        
                            )}
                    </div>

                    {/** PRODUCT IMAGES **/}
                    <div className="col-md-6 col-sm-6">
                        <div class="container">
                            <div class="section" id="carousel">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 mr-auto ml-auto">
                                            <div class="card card-raised card-carousel">
                                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                                                    <div class="carousel-inner">
                                                    {
                                                        prod.eventImage.map(image =>
                                                        <div class="carousel-item active">
                                                            <img class="d-block w-100" src={image.imageLoc}  alt="First slide" />
                                                        </div>
                                                        )}
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                 {/** REVIEWS**/}
                 <div className="row p-t-100">
                    <div className="col-md-12 col-sm-12 p-t-75">

                        {/** REVIEW HEADER **/}
                        <div class="row"><div className="col-md-12 col-sm-12 font-125">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div></div>
                        <div class="row"><div className="col-md-12 col-sm-12 font-125">RATINGS + REVIEWS</div></div>
                        <div class="row"><div className="col-md-12 col-sm-12font-75">Based on 675 reviews</div></div>
                        <div class="row"><div className="col-md-12 col-sm-12 font-100"><a class="linkbutton font-regular font-75" href="/reviewadd">WRITE REVIEW</a></div></div>

                        {/** REVIEW BODY **/}
                        <div class="row p-t-25">
                            <div className="col-md-12 col-sm-12">
                                
                                <div class="card">
                                    <div class="card-body text-left">
                                        <div class="row"><div className="col-md-4 col-sm-4">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div></div>
                                        <div class="row"><div className="col-md-4 col-sm-4">Smooth Sailing</div></div>
                                        <div class="row"><div className="col-md-4 col-sm-4">Tracee on Jun 23, 2018</div></div>
                                        <div class="row"><div className="col-md-12 col-sm-12">I went on a cruise with my bf and thank goodness I had the forethought to pick 
                                        some poo-pourri up at a local store before the trip! Its work and it works well. Just ordered the purse size cant wait for it to arrive! 
                                        I wont ever take a vacation or travel on business without my poo-pourri !</div></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div class="row p-t-10 p-b-100">
                            <div className="col-md-12 col-sm-12">
                                
                                <div class="card">
                                    <div class="card-body text-left">
                                        <div class="row"><div className="col-md-4 col-sm-4">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div></div>
                                        <div class="row"><div className="col-md-4 col-sm-4">Smooth Sailing</div></div>
                                        <div class="row"><div className="col-md-4 col-sm-4">Tracee on Jun 23, 2018</div></div>
                                        <div class="row"><div className="col-md-12 col-sm-12">I went on a cruise with my bf and thank goodness I had the forethought to pick 
                                        some poo-pourri up at a local store before the trip! Its work and it works well. Just ordered the purse size cant wait for it to arrive! 
                                        I wont ever take a vacation or travel on business without my poo-pourri !</div></div>
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
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (prod)=>{dispatch(addToCart(prod))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)