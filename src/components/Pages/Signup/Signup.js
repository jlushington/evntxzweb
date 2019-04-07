import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Signup.css';

export default class Signup extends Component{

    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            passwordConfirm:'',
            email:'', 
            emailmodal:false,
            welcomemodal:false
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
        this.setState({ [e.target.name]: e.target.value });

        const data = { email:this.state.email };

        fetch('http://localhost:8000/api/auth/authcheck', {
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
                    this.setState(prevState =>({ emailmodal:!prevState.emailmodal}));
                    this.setState({ email:''});
                    document.getElementById("email").reset();
                }
                
            }).catch((error) => {
                console.log("error");
            });

      }

      handleChange = (e)=>{
      this.setState({ [e.target.name]: e.target.value });
    }

      handleSubmit(event){
        event.preventDefault();

        const data = { username:this.state.username, password:this.state.password, passwordConfirm:this.state.passwordConfirm , email:this.state.email  };

        fetch('http://localhost:8000/api/user/adduser', {
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
                if(data.MessageTypeID ==1){
                    this.setState(prevState =>({ welcomemodal:!prevState.welcomemodal}));
                }

            }).catch((error) => {
                console.log("error");
            });

      }



    render(){
        return(   
            <div className="container">
                <div className="row login_box">
                    <div className="col-md-12 col-xs-12" align="center">
                        <div className="outter"><img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" className="image-circle"/></div>   
                        <h1>Hi Guest</h1>
                    </div>
        
                    <div className="col-md-12 col-xs-12 login_control">
                        <form onSubmit={this.handleSubmit}>

                            <div className="control">
                                <div className="label">Email</div>
                                <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChangeCheck}/>
                            </div>

                            <div className="control">
                                <div className="label">Username</div>
                                <input id="username" name="useruane" type="text" onChange={this.handleChange}  />
                            </div>

                            <div className="control">
                                <div className="label">Password</div>
                                <input id="password" name="password" type="password" onChange={this.handleChange} />
                            </div>
                                    
                            <div className="control">
                                <div className="label">Confirm Password</div>
                                    <input id="passwordConfirm" name="passwordConfirm" type="password" onChange={this.handleChange} />
                                </div>
                                <div align="center">
                                    <button className="btn btn-orange">Signup</button>
                                </div> 
                        </form>        
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