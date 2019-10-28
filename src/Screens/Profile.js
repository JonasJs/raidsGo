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
  font-size: 24px;
  color: #394064;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
  text-align: center;
`;

const Profile = () => {
  return (
    <Container>
      <Title>Perfil</Title>
    </Container>
  );
};

Profile.navigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

export default Profile;
