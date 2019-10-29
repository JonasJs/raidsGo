import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  max-width: 80%;
`;

const Message = styled.Text`
  color: #fff;
`;

const MessageItem = ({Text = 'Title', Uid = ''}) => {
  const uid = 123;

  return (
    <Container
      style={{
        alignSelf: uid === Uid ? 'flex-end' : 'flex-start',
        backgroundColor: uid === Uid ? '#FF4A00' : '#ccc',
      }}>
      <Message>{Text}</Message>
    </Container>
  );
};

export default MessageItem;
