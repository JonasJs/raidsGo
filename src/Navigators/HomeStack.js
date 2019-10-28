import {createStackNavigator} from 'react-navigation-stack';

//Screens
import Groups from '../Screens/Groups';
import Profile from '../Screens/Profile';
import Search from '../Screens/Search';

export default createStackNavigator({
  Groups,
  Profile,
  Search,
});
