import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {createNewUser} from '../actions/AuthActions';

// Components
import ButtonCustom from '../components/ButtonCustom';
import Input from '../components/Input';

import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  background-color: #ffffff;
`;
const Title = styled.Text`
  color: #394064;
  font-size: 24px;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
  text-align: center;
  margin-bottom: 56px;
`;
const InputContainer = styled.View``;
const ErroText = styled.Text`
  color: red;
  margin-bottom: 40px;
`;

const SignUp = ({navigation}) => {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const {status} = useSelector(state => state.auth);
  const Dispatch = useDispatch();

  const Login = () => {
    if (
      nickName !== '' ||
      email !== '' ||
      password !== '' ||
      confirmPassword !== ''
    ) {
      if (confirmPassword === password) {
        Dispatch(createNewUser(nickName, email, password));
      } else {
        alert('deu erro');
      }
    } else {
      setError('Por favor preencha todos os campos');
    }
  };

  useEffect(() => {
    /* componentDidUpdate code */
    alert(status);
    if (status === 1) {
      navigation.navigate('AppTab');
    }
  }, [status]);

  return (
    <Container>
      <Title>Inscrever-se</Title>
      <InputContainer>
        <Input Label="Nick Name:" onChangeText={text => setNickName(text)} />
        <Input Label="Email:" onChangeText={text => setEmail(text)} />
        <Input
          Label="Senha:"
          Type="Password"
          onChangeText={text => setPassword(text)}
        />
        <Input
          Label="Confirmar senha:"
          Type="Password"
          onChangeText={text => setConfirmPassword(text)}
        />
      </InputContainer>
      <ErroText>{error}</ErroText>
      <ButtonCustom Title="Entrar" onPress={() => Login()} />
    </Container>
  );
};

SignUp.navigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default SignUp;
