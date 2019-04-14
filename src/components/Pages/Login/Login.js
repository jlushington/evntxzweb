import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Login extends Component{

    constructor() {
        super();
        this.state={
            password:'',
            email:'', 
            loginmodal:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
      }

      toggle() {
        this.setState(prevState => ({
            loginmodal: !prevState.loginmodal
        }));
      }

      handleChange = (e)=>{
        this.setState({ [e.target.name]: e.target.value });
      }

      handleSubmit(event){
        event.preventDefault();
        const data = {password:this.state.password, email:this.state.email};

        fetch('http://localhost:8000/api/auth/authaction', {
            method: 'POST',
            crossDomain:true,
            mode:"cors",
            headers: { 'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
            body:  JSON.stringify(data)
          }).then(response => {
              return response.json();
            }).then( data=>{
                if(data.MessageTypeID ==0){
                    this.setState(prevState =>({ loginmodal:!prevState.loginmodal}));
                }else{
                    //this where you would redirect them
                }
                console.info(data);
            }).catch((error) => {
                console.log("error");
            });
      }


    render(){
        return(
            <div className="container p-t-100  p-b-100">

                <div className="row justify-content-center">
                    {/*LOGIN*/}
                    <div className="col-md-8 col-xs-8">
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
                                <button className="btn btn-orange">Signup</button>
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