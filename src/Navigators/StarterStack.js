import {createStackNavigator} from 'react-navigation-stack';

//Screens
import StarterIntro from '../Screens/StarterIntro';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';

export default createStackNavigator({
  StarterIntro,
  Login,
  SignUp,
});
