import React from 'react';

// Components
import ButtonCustom from '../components/ButtonCustom';

import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  background-color: #ffffff;
`;
const Logo = styled.Image`
  margin: 0 auto 24px auto;
`;

const Login = () => {
  return (
    <Container>
      <Logo source={require('../assets/images/logo.png')} />

      <ButtonCustom Title="Cadastre-se" />
    </Container>
  );
};

Login.navigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Login;
