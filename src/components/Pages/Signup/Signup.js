import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import './Signup.css';
import Spinner from 'react-spinner-material';
import {properties} from '../../../properties';

export default class Signup extends Component{

    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            passwordConfirm:'',
            email:'', 
            emailmodal:false,
            welcomemodal:false,
            isLoading:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeCheck= this.handleChangeCheck.bind(this);
        this.toggle = this.toggle.bind(this);

        const headers= new Headers();
        headers.append('Content-Type', 'application/json');

      }

      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      handleChangeCheck = (e)=>{
        this.setState({isLoading:true});
        this.setState({ [e.target.name]: e.target.value });

        const data = { email:this.state.email };

        fetch(properties.userserviceurl+'/api/auth/authcheck', {
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
                if(data.MessageTypeID ===0){
                    this.setState(prevState =>({ emailmodal:!prevState.emailmodal}));
                    this.setState({ email:''});
                    document.getElementById("email").reset();
                    this.setState({isLoading:false});
                }
                
            }).catch((error) => {
                console.log(error);
                this.setState({isLoading:false});
            });

      }

      handleChange = (e)=>{
      this.setState({ [e.target.name]: e.target.value });
    }

      handleSubmit(event){
        event.preventDefault();

        const data = { username:this.state.username, password:this.state.password, passwordConfirm:this.state.passwordConfirm , email:this.state.email,roles:[{name:"ENDUSER"}]  };

        fetch(properties.userserviceurl+'/api/user/adduser', {
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
                if(data.MessageTypeID ===1){
                    this.setState(prevState =>({ welcomemodal:!prevState.welcomemodal}));
                }

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
                            <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={this.state.isLoading} />
                            <div className="col-md-12 col-xs-12 font-125 font-bold p-b-25">SIGN UP</div>
                        </div>

                        {/*LOGIN BODY*/}
                        <div className="row align-left">
                            <div className="col-md-12 col-xs-12">
                                <div className="row"><div className="col-md-12 col-xs-12 font-75 font-regular p-b-25 p-t-25">Please enter your email and password below to access your account</div></div>
                                <div className="row"><div className="col-md-12 col-xs-12">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="control">
                                        <div className="font-75 font-regular align-left text-left">Email</div>
                                        <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChangeCheck}/>
                                    </div>

                                    <div className="control">
                                        <div className="font-75 font-regular align-left text-left">Username</div>
                                        <input id="username" name="useruane" type="text" onChange={this.handleChange}  />
                                    </div>

                                    <div className="control">
                                        <div className="font-75 font-regular align-left text-left">Password</div>
                                        <input id="password" name="password" type="password" onChange={this.handleChange} />
                                    </div>
                                        
                                    <div className="control">
                                        <div className="font-75 font-regular align-left text-left">Confirm Password</div>
                                        <input id="passwordConfirm" name="passwordConfirm" type="password" onChange={this.handleChange} />
                                    </div>
                                    <div align="center">
                                    <button className="font-75 color-white">SIGNUP</button>
                                    </div> 
                                </form>
                                </div></div>
                                <div className="row"><div className="col-md-12 col-xs-12"></div></div>
                            </div>
                        </div>
                    </div>

                </div>
                

                {/*MODEL - EMAIL EXIST*/}
                <Modal isOpen={this.state.emailmodal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Evntxz- User Exist</ModalHeader>
                    <ModalBody>
                        Email Address already exist please select another email address or login
                    </ModalBody>
                </Modal>

                 {/*MODEL - EMAIL EXIST*/}
                 <Modal isOpen={this.state.welcomemodal} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Evntxz- Welcome</ModalHeader>
                    <ModalBody>
                        Welcome to Eventxz, Login and get started with creating your events or looking for your next event.
                        <a href ="/login">Login</a>
                    </ModalBody>
                </Modal>


            </div>
        );
    }
}