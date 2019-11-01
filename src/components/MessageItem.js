import React from 'react';
import {SvgUri} from 'react-native-svg';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 0 10px;
  margin-bottom: 16px;
  max-width: 80%;
  flex-direction: row;
`;

const ContainerImage = styled.View`
  width: 50px;
  height: 50px;
`;
const Content = styled.View`
  margin-left: 8px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #394064;
  margin-bottom: 4px;
  font-family: 'Lato-Bold';
`;

const Message = styled.Text`
  font-size: 14px;
  color: #9294a5;
  font-family: 'Lato-Regular';
`;

const MessageItem = ({Text = 'Title', NickName = 'Jonas Alves', Uid = ''}) => {
  const uid = 123;

  return (
    <Container>
      <ContainerImage>
        <SvgUri
          width="100%"
          height="100%"
          uri="https://avatars.dicebear.com/v2/bottts/Jonas.svg"
        />
      </ContainerImage>
      <Content>
        <Title>{NickName}</Title>
        <Message>{Text}</Message>
      </Content>
    </Container>
  );
};

export default MessageItem;
