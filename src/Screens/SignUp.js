import React from 'react';

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

const SignUp = () => {
  return (
    <Container>
      <Title>Inscrever-se</Title>
      <InputContainer>
        <Input Label="Nick Name:" />
        <Input Label="Email:" />
        <Input Label="Senha:" Type="Password" />
        <Input Label="Confirmar senha:" Type="Password" />
      </InputContainer>
      <ButtonCustom Title="Entrar" />
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
