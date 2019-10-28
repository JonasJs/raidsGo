import {createStackNavigator} from 'react-navigation-stack';

//Screens
import Groups from '../screens/Groups';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

export default createStackNavigator({
  Groups,
  Profile,
  Search,
});
