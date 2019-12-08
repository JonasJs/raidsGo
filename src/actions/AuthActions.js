import firebase from '../FirebaseConnection';

export const teste = () => {
  return {
    type: 'SET_UID',
    payload: {
      uid: 'testando',
    },
  };
};

export const verifyLogin = () => {
  return dispatch => {
    let user = firebase.auth().currentUser;
    if (user) {
      dispatch({
        type: 'SER_STATUS',
        payload: {
          status: 1,
        },
      });
    } else {
      dispatch({
        type: 'SER_STATUS',
        payload: {
          status: 2,
        },
      });
    }
  };
};

export const createNewUser = (nickName, email, password) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.updateProfile({
          displayName: nickName,
        });

        dispatch({
          type: 'SET_UID',
          payload: {
            uid,
          },
        });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/credential-already-in-use':
            alert('E-mail já utilizado');
            break;
          case 'auth/invalid-email':
            alert('E-mail inválido!');
            break;
          case 'auth/operation-not-allowed':
            alert('Tente novamente mais tarde');
            break;
          case 'auth/weak-password':
            alert('Digite uma senha melhor!');
            break;
        }
      });
  };
};

export const SignInAction = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        let uid = firebase.auth().currentUser.uid;

        dispatch({
          type: 'SET_UID',
          payload: {
            uid,
          },
        });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('Email inválido!');
            break;
          case 'auth/user-disabled':
            alert('Seu usuário está desativado!');
            break;
          case 'auth/user-not-found':
            alert('Não existe este usuário!');
            break;
          case 'auth/wrong-password':
            alert('E-mail e/ou senha errados!');
            break;
        }
      });
  };
};

export const setInfos = () => {
  let user = firebase.auth().currentUser;
  const {email, displayName} = user.providerData[0];
  return {
    type: 'SET_INFOS',
    payload: {
      email,
      nickName: displayName,
    },
  };
};

export const setEmail = email => {
  return {
    type: 'SET_EMAIL',
    payload: {
      email,
    },
  };
};
