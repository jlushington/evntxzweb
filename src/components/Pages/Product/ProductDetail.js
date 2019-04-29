import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import "antd/dist/antd.css";
import {InputNumber, Rate} from 'antd';
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
            quantity:1,
            productID:'',
            reviews:[]
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
       console.info(values);
       this.setState({productID:values.iD})

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
      .catch((error) => { console.log(error);});

      
      const datareview = {
        productID: values.iD
   }

      fetch('http://localhost:8000/api/review/getreview', {
        method: 'POST',
        crossDomain:true,
        mode:"cors",
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'},
        body:  JSON.stringify(datareview)
      })
      .then(response =>response.json())
      .then( data=>{
          console.info(data);
        this.setState({reviews:data}) 
      })
      .catch((error) => { console.log(error);});

      }
   

    render() {

        const prod = this.state.data
        const min=1;
        const max=10;
        const defaultvalue=1;
        const reviews = this.state.reviews;
        var reviewAvg=0;
        var reviewCount=1;

        for(var i=0; i<reviews.length; i++){
            reviewCount=reviewCount+i;
             reviewAvg=reviewAvg+Number(reviews[i].reviewValue);
        }


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
                        <Rate allowHalf value={reviewAvg/reviewCount} />
                        </div></div>
                        <div class="row"><div className="col-md-12 col-sm-12 font-125">RATINGS + REVIEWS</div></div>
                        <div class="row"><div className="col-md-12 col-sm-12 font-75">Based on {reviewCount} reviews</div></div>
                        <div class="row"><div className="col-md-12 col-sm-12 font-100 p-t-25 p-t-50"><a class="linkbutton font-regular font-75" href={"/reviewadd/"+this.state.productID}>WRITE REVIEW</a></div></div>

                        {/** REVIEW BODY **/}
                        {
                            reviews.map(review =>
              
                                    
                        <div class="row p-t-25">
                            <div className="col-md-12 col-sm-12">
                                
                                <div class="card">
                                    <div class="card-body text-left">
                                        <div class="row"><div className="col-md-4 col-sm-4">
                                            <Rate value={review.reviewValue} />
                                        </div></div>
                                        
                                        <div class="row"><div className="col-md-4 col-sm-4">{review.dateCreated}</div></div>
                                        <div class="row"><div className="col-md-12 col-sm-12">{review.reviewComment}</div></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        )}

                        <div class="row p-t-10 p-b-100">
                            <div className="col-md-12 col-sm-12">

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