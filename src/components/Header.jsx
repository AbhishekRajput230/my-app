import React from 'react';
import Logo from '../images/stpl_logo.png';

class Header extends React.Component
{
    navigateTo = path => {
        const { history } = this.props.history;
        history.push(path);
    };
    logout = path => {
        localStorage.setItem('user','');
        const { history } = this.props.history;
        history.push(path);
    };
    render()
    {
        const style={width:'100px',height:'50px',paddingLeft:'50px',float:'left'};
        const constImg = {width:'100%', marginTop:'2px'};
        const rightDiv = {float:'right',paddingRight:'50px', lineHeight:'50px'};
        const Register ={borderLeft: '1px solid', paddingLeft: '6px',color:'#0d4982', textDecoration: 'none'};
        const Login ={borderRight: '1px solid', paddingRight: '6px',color:'#0d4982', textDecoration: 'none'};
        const Logout ={color:'#0d4982', textDecoration: 'none'};
        const i = {paddingRight:'5px'};

        if(localStorage.getItem('user').length > 0)
        {
            return(<div id="Header" >
                    <div style={style}><a alt="Home" href="#" onClick={() => this.navigateTo("Home")}><img style={constImg} alt="Complany Logo" src={Logo} /></a></div>
                    <div style={rightDiv} >
                        <a style={Logout} alt="Login" className="btn btn-lg btn-success" href="#" onClick={() => this.logout("Login")}><i className="fa fa-lock" aria-hidden="true" style={i}></i>Logout</a>
                    </div>
            </div>);
        }else
        {
            return(<div id="Header" >
                    <div style={style}><a alt="Home" href="#" onClick={() => this.navigateTo("Home")}><img style={constImg} alt="Complany Logo" src={Logo} /></a></div>
                    <div style={rightDiv} >
                        <a style={Login} alt="Login" className="btn btn-lg btn-success" href="#" onClick={() => this.navigateTo("Login")}><i className="fa fa-unlock-alt" aria-hidden="true" style={i}></i>Login</a>
                        <a style={Register} alt="Register" className="btn btn-lg btn-success" href="#" onClick={() => this.navigateTo("Register")}><i className="fa fa-user" aria-hidden="true" style={i}></i>Register</a>
                    </div>
            </div>);
        }
    }
}
export default Header;