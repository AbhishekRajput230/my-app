import React from 'react';
import RTextBox from './RefTextBox';
import Logo from '../images/stpl_logo.png';
import RButton from './RButton';
import '../login.css';
import '../App.css';

class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.FirstName = React.createRef();
        this.LastName = React.createRef();
        this.UserName = React.createRef();
        this.UserPassword = React.createRef();
        this.ConfirmPassword = React.createRef();
    }
    handleSubmit(e)
    {
        e.preventDefault();
        if (!(this.FirstName.current.value && this.LastName.current.value && this.UserName.current.value && this.UserPassword.current.value && this.ConfirmPassword.current.value )) {
            return;
        }
        let responseJson = [{
            username: this.UserName.current.value,
            password: this.UserPassword.current.value,
            firstName: this.FirstName.current.value,
            lastName: this.LastName.current.value
        }];
        let jsonparse = JSON.stringify(responseJson);
        localStorage.removeItem('records');
        localStorage.setItem('records',jsonparse);
        alert("User has been registered successfully.....");
        const { history } = this.props;
        history.push("Login");


    }
    render(){        
        return(
            <div id="RegisterBox">
                <div><a href="#" onClick={()=>{ const { history } = this.props; history.push("Home");}} alt="logo"><img alt="Complany Logo" src={Logo} /></a></div>
                <div><RTextBox RefData={this.FirstName} Placeholder={"First Name"} Type="text" /></div>
                <div><RTextBox RefData={this.LastName} Placeholder={"Last Name"} Type="text" /></div>
                <div><RTextBox RefData={this.UserName} Placeholder={"Email"} Type="text" /></div>
                <div><RTextBox RefData={this.UserPassword} Placeholder={"Password"} Type="password" /></div>
                <div><RTextBox RefData={this.ConfirmPassword} Placeholder={"Confirm Password"} Type="password" /></div>
                <div><RButton ButtonName="Register" RClick={(e)=>this.handleSubmit(e)} /></div>
            </div>);
    }
}export default Register;