import React from 'react';
import styled from 'styled-components/native';

// Components
import MessageItem from '../components/MessageItem';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  background-color: #ffffff;
`;
const NickName = styled.Text``;

const Conversation = () => {
  return (
    <Container>
      <MessageItem Uid="123" title="Tesnaod" />
    </Container>
  );
};

Conversation.navigationOptions = {
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
