import React from 'react';
import {SvgUri} from 'react-native-svg';
import styled from 'styled-components/native';

// Components
import Input from '../components/Input';
import Header from '../components/Header';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  background-color: #ffffff;
`;

const ContainerImage = styled.View`
  width: 160px;
  height: 160px;
  margin: 0 auto;
`;

const NickName = styled.Text`
  font-size: 18px;
  color: #394064;
  font-family: 'Lato-Bold';
  text-align: center;
  margin: 16px 0 40px 0;
`;

const Profile = () => {
  return (
    <>
      <Header Title="Perfil"></Header>
      <Container>
        <ContainerImage>
          <SvgUri
            width="100%"
            height="100%"
            uri="https://avatars.dicebear.com/v2/bottts/Jonas.svg"
          />
        </ContainerImage>
        <NickName>JonasAlves</NickName>
        <Input
          Label="Email:"
          Value="JoonasBalves@gmail.com"
          Editable={false}></Input>
        <Input
          Label="Senha:"
          Value="JoonasBalves@gmail.com"
          Type="Password"
          Editable={false}></Input>
      </Container>
    </>
  );
};

Profile.navigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Profile;
