import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Screens
import HomeStack from './HomeStack';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';

//Component
import CustomTabBar from '../components/CustomTabBar';

export default createBottomTabNavigator(
  {
    HomeStack,
    Profile,
    Search,
  },
  {
    tabBarComponent: props => (
      <CustomTabBar
        {...props}
        items={[
          {title: 'Perfil', icon: '...', route: 'Profile'},
          {title: 'Home', icon: '...', route: 'Home'},
          {title: 'Pesquisar', icon: '...', route: 'Search'},
        ]}
      />
    ),
    tabBarOptions: {
      activeTintColor: '#4F4F4F',
      inactiveTintColor: '#ddd',
    },
  },
);
