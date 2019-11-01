import React, {useState} from 'react';

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
const InputContainer = styled.View`
  margin-bottom: 40px;
`;
const ErroText = styled.Text`
  color: red;
`;

const SignUp = () => {
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const Login = () => {
    if (
      nickName !== '' ||
      email !== '' ||
      password !== '' ||
      confirmPassword !== ''
    ) {
      if (confirmPassword === password) {
        alert('Entrou');
      } else {
        alert('deu erro');
      }
    } else {
      alert('deu ruim');
    }
  };

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
