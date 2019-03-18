import React, { Component } from 'react';
import firebase from '../../firebase/config';

// Helpers
import FormItem from '../../helpers/FormItem';



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const { email, password } = event.target.elements;

    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then( signedUser => {
      this.setState({
        error: '',
        loading: false
      });
      console.log(signedUser);
    }).catch( error => {
      console.log(error)
      switch(error.code){
        case 'auth/wrong-password':
          this.setState({
            error: 'A senha é inválida.',
            loading: false
          });
          break
        
        case 'auth/user-not-found':
          this.setState({
            error: 'Usuario não cadastrado',
            loading: false
          });
          break

        case 'auth/invalid-email':
          this.setState({
            error: 'Formato de email invalido.',
            loading: false
          });
          
          break
        default:
      }
    });

  }

  
  render() {
    return (
      <div className="Login">
         { this.state.loading &&
            <h1>loading...</h1>

          }
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>

            <FormItem label="Email" type="email" name="email" />
            <FormItem label="Senha" type="password" name="password" />
            <p className="form-error">{this.state.error}</p>
            <input type="submit" className="btnSubmit" value="Cadastrar"/>
          </form>
      </div>
    );
  }
}

export default Login;
