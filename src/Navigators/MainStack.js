import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StarterStack from './StarterStack';

//Screens
import Preload from '../screens/Preload';

const MainStack = createStackNavigator(
  {
    Preload,
    StarterStack,
    //Home
  },
  {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainStack);
