import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router";
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Index extends React.Component 
{
    render()
    {
        return(<BrowserRouter><App/></BrowserRouter>);
    }
}
export default withRouter(Index);
ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();
