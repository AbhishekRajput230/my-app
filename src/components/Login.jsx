import React from 'react';
import RTextBox from './RefTextBox';
import Logo from '../images/stpl_logo.png';
import RButton from './RButton';
import '../login.css';
import '../App.css';

// export const users = [
// { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'Test' },
// { id: 2, username: 'abc', password: 'abc', firstName: 'ABC', lastName: 'ABC' },
// { id: 3, username: 'abhishek', password: 'abc', firstName: 'Abhishek', lastName: 'Rajput' },
// { id: 4, username: 'Abhishek', password: 'abc', firstName: 'Abhishek', lastName: 'Rajput' },
// { id: 5, username: 'ABHISHEK', password: 'abc', firstName: 'Abhishek', lastName: 'Rajput' }];

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.UserName = React.createRef();
        this.UserPassword = React.createRef();
    } 
    handleSubmit(e) {
        e.preventDefault();
        if (!(this.UserName.current.value && this.UserPassword.current.value)) {
            return;
        }
         try {
            const users = JSON.parse(localStorage.getItem('records'));
            let filteredUsers = users.filter(user => {
                return user.username === this.UserName.current.value && user.password === this.UserPassword.current.value;
            });
            if (filteredUsers.length) {
                let user = filteredUsers[0];
                let responseJson = {
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName
                };
                localStorage.setItem('user', JSON.stringify(responseJson));
                const { history } = this.props;
                history.push("Admin");
            } else {
                alert('Email or Password is incorrect');
            }
        }catch (error) {
            console.log(error);
            alert('Record Not Exists.');
            return;
        }                
    }
    render ()
    {
        return(
        <div id="LoginBox">
            <div><a href="#" onClick={()=>{ const { history } = this.props; history.push("Home");}} alt="logo"><img alt="Complany Logo" src={Logo} /></a></div>
            <div><RTextBox RefData={this.UserName} Placeholder={"Email"} Type="text" /></div>
            <div><RTextBox RefData={this.UserPassword} Placeholder={"Password"} Type="password" /></div>
            <div><RButton ButtonName="Login" RClick={(e)=>this.handleSubmit(e)} /></div>
        </div>);
    }
}
export default Login;