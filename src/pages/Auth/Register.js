import React, { Component } from 'react';
import firebase from '../../firebase/config';

// Helpers
import FormItem from '../../helpers/FormItem';

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false
    }

  }
  

  handleSignUp = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const { email, password, passwordConfirmation } = event.target.elements;

    if(password.value === passwordConfirmation.value){
      
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then( createUser => {
        
        this.setState({
          error: '',
          loading: false
        });

      }).catch( error => {
        console.error(error)
        switch(error.code){
          case 'auth/invalid-email':
            this.setState({
              error: 'Formato de Email invalido',
              loading: false
            });
            break
          
          case 'auth/weak-password':
            this.setState({
              error: 'A senha deve ter pelo menos 6 caracteres',
              loading: false
            });
            break

          case 'auth/email-already-in-use':
            this.setState({
              error: 'O endereço de e-mail já está sendo usado por outra conta.',
              loading: false
            });
            break

          default:
        }

      })
    
    } else {
      this.setState({
        error: 'As senhas não coincidem',
        loading: false
      });

    }
  };

  render() {
    return (
      <div className="register">
          { this.state.loading &&
            <h1>loading...</h1>

          }
          <h1>Register</h1>
          <form onSubmit={this.handleSignUp}>
            
            <FormItem label="Nick do jogo" type="text" name="nickName" />
            <FormItem label="Email" type="email" name="email" />
            <FormItem label="Senha" type="password" name="password" />
            <FormItem label="Confirme a senha" type="password" name="passwordConfirmation" />
            <p className="form-error">{this.state.error}</p>
            <input type="submit" className="btnSubmit" value="Cadastrar"/>
          </form>
      </div>
    );
  }
}

export default Register;
