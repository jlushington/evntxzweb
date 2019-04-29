import React, {Component} from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default class ReviewAdd extends Component{

    constructor(props) {
        super(props);

        this.state={
            userID:'',
            productID:'',
            reviewValue:'',
            tempreviewvalue:'',
            reviewComment:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleValueChange = (reviewvalue) => {
        console.info(reviewvalue);
        this.setState({ tempreviewvalue: reviewvalue});
      }

    componentDidMount() {
        const values= this.props.match.params;
        const isAuth=localStorage.getItem("isAuth");
        const authToken=localStorage.getItem("authToken");

        if(isAuth){
            if(authToken===null || authToken===undefined){
                window.location.replace("http://localhost:8080/checkout");
            }else{
                this.setState({productID:values.iD}) 
                this.setState({userID:authToken})  
            }
        }else{
            window.location.replace("http://localhost:8080/checkout");
        }
        
    }

    handleChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit(event){
        event.preventDefault();
        const payload = {
            userID:this.state.userID, 
            productID:this.state.productID,
            reviewValue:this.state.tempreviewvalue,
            reviewType:'EVENT',
            reviewComment:this.state.reviewComment
        }

        fetch('http://localhost:8000/api/review/addreview', {
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
       if(data.MessageTypeID ===0){
           console.info(data);
       }else{
        window.location.replace("http://localhost:8080/productdetail/"+this.state.productID);

       }
      })
      .catch((error) => { console.log(error);});

      }

    render(){
        const  rvalue  = this.state.tempreviewvalue;
        console.info(rvalue)
        return(
            <div className="container p-t-100  p-b-100">

                <div className="row justify-content-center">
                    {/*REVIEW*/}
                    <div className="col-md-8 col-xs-8">
                        {/*REVIEW TITLE*/}
                        <div className="row">
                            <div className="col-md-12 col-xs-12 font-125 font-bold p-b-25">ADD REVIEW</div>
                        </div>

                        {/*REVIEW BODY*/}
                        <div className="row bg-grey align-left">
                            <div className="col-md-12 col-xs-12">
                                <div className="row"><div className="col-md-12 col-xs-12 font-75 font-regular p-b-25 p-t-25">Please enter your email and password below to access your account</div></div>
                                <div className="row"><div className="col-md-12 col-xs-12">
                                <form onSubmit={this.handleSubmit}>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left text-left">Rating</div>
                                <span>
                                    <Rate tooltips={desc} onChange={this.handleValueChange} value={rvalue} />
                                     {rvalue ? <span className="ant-rate-text">{desc[rvalue - 1]}</span> : ''}
                                </span>
                            </div>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left text-left"> Review Comment</div>
                                <textarea  rows="4" cols="50" id="reviewComment" name="reviewComment" onChange={this.handleChange} />
                            </div>
                            <div align="center">
                                <button className="btn btn-orange">Submit</button>
                            </div>
                        </form>
                                </div></div>
                                <div className="row"><div className="col-md-12 col-xs-12"></div></div>
                            </div>
                        </div>
                    </div>

                </div>
              
            </div>
            );
        }
    }