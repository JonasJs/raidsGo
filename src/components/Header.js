import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 65px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e7f2;
`;

const Text = styled.Text`
  color: #3d3e4f;
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Lato-Bold';
`;

const Header = ({Title}) => {
  return (
    <Container>
      <Text>{Title}</Text>
    </Container>
  );
};

export default Header;
