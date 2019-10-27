import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Content = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px;
  margin-bottom: 16px;
`;

const Text = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
`;

const ButtonCustom = ({Title, Theme, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Content
      style={{
        backgroundColor: Theme === 'void' ? ' ' : '#5D39DB',
        borderColor: Theme === 'void' ? '#394064' : '#5D39DB',
      }}>
      <Text style={{color: Theme == 'void' ? '#394064' : '#FFF'}}>{Title}</Text>
    </Content>
  </TouchableOpacity>
);

export default ButtonCustom;
