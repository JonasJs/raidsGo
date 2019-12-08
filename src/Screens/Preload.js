import {StackActions, NavigationActions} from 'react-navigation';
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {verifyLogin} from '../actions/AuthActions';

const Preload = ({navigation}) => {
  const {status} = useSelector(state => state.auth);
  const Dispatch = useDispatch();

  Dispatch(verifyLogin);
  if (status === 1) {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  } else {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
      }),
    );
  }

  return null;
};

export default Preload;
