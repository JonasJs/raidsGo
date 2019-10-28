import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Screens
import HomeStack from './HomeStack';

//Component
import CustomTabBar from '../components/ButtonCustom';

export default createBottomTabNavigator(
  {
    HomeStack,
  },
  {
    tabBarComponent: props => {
      <CustomTabBar
        {...props}
        items={[{Title: 'Home', icon: '...', route: 'HomeStack'}]}
      />;
    },
  },
);
