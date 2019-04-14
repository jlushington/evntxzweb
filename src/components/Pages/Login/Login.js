import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class Login extends Component{

    constructor() {
        super();
        this.state={
            password:'',
            email:'', 
            loginmodal:false,
            isAuth:false
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

        fetch('http://userservices.jx-staging.35.231.104.48.nip.io/api/auth/authaction', {
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
                    localStorage.setItem('authtoken', data.Message);
                    state.setState({isAuth:true});
                    localStorage.setItem('isAuth', this.state.isAuth);

                    //redirect to Home
                    return <Redirect to='/' />
                }
                console.info(data);
            }).catch((error) => {
                console.log("error");
            });
      }

      componentDidMount() {

        if(localStorage.getItem("infiniteScrollEnabled") === null){

        }else{
            this.state.isAuth= localStorage.getItem('isAuth');

            <Route
            path="/privacy-policy"
            component={ Redirect }
            loc="http://evntxzcp.jx-staging.35.231.104.48.nip.io/"
            />
        }

        
    }


    render(){
        return(
            <div className="container p-t-100  p-b-100">

                <div className="row justify-content-center">
                    {/*LOGIN*/}
                    <div className="col-md-8 col-xs-8">
                        {/*LOGIN TITLE*/}
                        <div className="row">
                            <div className="col-md-12 col-xs-12 font-125 font-bold p-b-25">LOGIN</div>
                        </div>

                        {/*LOGIN BODY*/}
                        <div className="row bg-grey align-left">
                            <div className="col-md-12 col-xs-12">
                                <div className="row"><div className="col-md-12 col-xs-12 font-75 font-regular p-b-25 p-t-25">Please enter your email and password below to access your account</div></div>
                                <div className="row"><div className="col-md-12 col-xs-12">
                                <form onSubmit={this.handleSubmit}>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left text-left">Email</div>
                                <input id="email" name="email" type="email" onChange={this.handleChange} onBlur={this.handleChange}/>
                            </div>
                            <div className="p-b-25">
                                <div className="font-75 font-regular align-left text-left"> Password</div>
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