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

const Text = styled.Text`
  font-size: 18;
  text-align: center;
  color: #a6b2d6;
  font-family: 'Lato-Bold';
  margin-bottom: 80px;
`;

const StarterIntro = ({navigation}) => {
  return (
    <Container>
      <Logo source={require('../assets/images/logo.png')} />
      <Text>
        App que tem como objetivo
        {'\n'}
        conectar pessoas
      </Text>
      <ButtonCustom Title="Cadastre-se" />
      <ButtonCustom
        Title="Entrar"
        Theme="void"
        onPress={() => navigation.navigate('Login')}
      />
    </Container>
  );
};

StarterIntro.navigationOptions = {
  header: null,
};

export default StarterIntro;
