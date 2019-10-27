import {StackActions, NavigationActions} from 'react-navigation';

const Preload = ({navigation}) => {
  navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
    }),
  );

  return null;
};

export default Preload;
