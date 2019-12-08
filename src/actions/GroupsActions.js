import firebase from '../FirebaseConnection';

export const listGroups = () => {
  return dispatch => {
    firebase
      .database()
      .ref('Groups')
      .once('value')
      .then(snapshot => {
        let groups = [];

        snapshot.forEach(childItem => {
          const {key, title, numberUser, pokemon} = childItem.val();
          groups.push({
            key,
            title,
            numberUser,
            pokemon,
          });
        });
        //   alert(JSON.stringify(groups));
        dispatch({
          type: 'SET_GROUPS',
          payload: {
            groups,
          },
        });
      });
  };
};
