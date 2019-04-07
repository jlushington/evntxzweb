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
                                <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChange}/>
                            </div>
                            <div className="control">
                                <div className="label"> Password</div>
                                <input id="password" name="password" type="password" onChange={this.handleChange} />
                            </div>
                            <div align="center">
                                <button className="btn btn-orange">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>

                 {/*MODEL - LOGIN ERROR */}
                 <Modal isOpen={this.state.loginmodal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Evntxz- Login Error</ModalHeader>
                    <ModalBody>
                        Email Address and the Password that you provided did not match, Please Try again.
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}