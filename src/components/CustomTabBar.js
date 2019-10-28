import React from 'react';
import styled from 'styled-components/native';

const TabBarArea = styled.SafeAreaView`
  margin-bottom: 16px;
`;
const TabBarItem = styled.View``;
const Text = styled.Text``;

const CustomTabBar = ({Items}) => {
  return (
    <TabBarArea>
      {Items.map(item => (
        <TabBarItem key={item.route}>
          <Text>{item.Title}</Text>
        </TabBarItem>
      ))}
    </TabBarArea>
  );
};

export default CustomTabBar;
