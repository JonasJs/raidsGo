import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Style
import './index.css';

// Pages
import App from './pages/App';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';


const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>        
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
