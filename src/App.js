import React from 'react';
import { withRouter } from "react-router";
import { Route,  Switch } from 'react-router-dom';
import './index.css';
import DashBoard from './components/Dashboard';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';

class App extends React.Component 
{
    render()
    {
        const style={width:'100%',height:'calc( 100vh - 85px)',clear:'both'};
        return(<div>
            <Header history={this.props}/>
                <div style={style}>
                    <Switch>
                        <ProtectedRoute path='/Admin' component={DashBoard} />
                        <Route path="/Home" render={(routeProps) => <Home {...routeProps}/>} />
                        <Route exact path="/" render={(routeProps) => <Home {...routeProps}/>} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            <Footer />
            </div>
        );
    }
}
export default withRouter(App);