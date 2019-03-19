import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import firebase from './firebase/config'

// Style
import './index.css';

// Pages
import App from './pages/App';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';


class Root extends Component{

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.history.push('/');
                console.log(user)
            }
        });
    }

    render() {
        return (
            
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/registrar" component={Register} />
            </Switch>
        )
    }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
    <Router>
        <RootWithAuth />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
