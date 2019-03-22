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

// Redux
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser, clearUser } from './actions';

const store = createStore( rootReducer, composeWithDevTools());


class Root extends Component{

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.setUser(user);
                this.props.history.push('/');
                console.log(user)
            } else {
                this.props.history.push('/login');
                this.props.clearUser();
            }
        });
    }


    render() {
        return this.props.isLoading ? <h1>Loading...</h1> : (
            
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/registrar" component={Register} />
            </Switch>
        )
    }
}

const mapStateFromProps = state => ({
    isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(connect(
    mapStateFromProps,
    { setUser, clearUser }

)(Root));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
