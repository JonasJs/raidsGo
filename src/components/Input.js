import React from 'react';
import styled from 'styled-components/native';

const Content = styled.View`
  margin-bottom: 16px;
`;

const TextInput = styled.TextInput`
  height: 50px;
  background-color: #e7e8f6;
  padding: 0 8px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-family: 'Lato-Bold';
  margin-bottom: 8px;
  color: #394064;
`;

const Input = ({Label, Type, onChangeText}) => (
  <Content>
    <Text>{Label}</Text>
    <TextInput
      secureTextEntry={Type === 'Password' ? true : false}
      onChangeText={onChangeText}
    />
  </Content>
);

export default Input;
