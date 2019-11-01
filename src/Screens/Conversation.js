import React from 'react';
import styled from 'styled-components/native';

// Components
import MessageItem from '../components/MessageItem';

//Icons
import IconSend from '../components/Icons/IconSend';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;
const Content = styled.View`
  flex: 1;
  margin-top: 40px;
  padding: 0 10%;
`;
const Send = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 70px;
  padding-left: 10%;
`;
const Icon = styled.TouchableOpacity`
  padding-right: 10%;
`;
const Conversation = () => {
  return (
    <Container>
      <Content>
        <MessageItem Uid="123" Text="Tesnaod" />
        <MessageItem
          Uid="123"
          Text="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica"
        />
      </Content>
      <Send
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <Input placeholder="Digite sua menssagem"></Input>
        <Icon>
          <IconSend></IconSend>
        </Icon>
      </Send>
    </Container>
  );
};

Conversation.navigationOptions = {
  tabBarVisible: false,
  title: 'Conversa',
  headerStyle: {
    height: 65,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#e5e7f2',
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Lato-Bold',
  },
};

export default Conversation;
