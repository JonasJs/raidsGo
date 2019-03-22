import React, { Component } from 'react';
import firebase from '../firebase/config';

// redux
import { connect } from 'react-redux';

class App extends Component {

  state = {
    user: this.props.currentUser
  }

  handleSingout = () =>{
    firebase.auth().signOut().then( () => {
      console.log('Saiu')
    })
  }

  render() {
   console.log()
    return (
      <div className="App">
        <h1> {this.state.user.email} </h1>
        <p onClick={this.handleSingout}>Sair...</p>
      </div>
    );
  }
}
const mapStateFromProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateFromProps)(App);
