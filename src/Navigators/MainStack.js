import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screens
import Preload from '../Screens/Preload';

const MainStack = createStackNavigator(
  {
    Preload,
    //Login
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
