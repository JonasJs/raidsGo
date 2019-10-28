import {createStackNavigator} from 'react-navigation-stack';

//Screens
import StarterIntro from '../screens/StarterIntro';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export default createStackNavigator({
  StarterIntro,
  Login,
  SignUp,
});
