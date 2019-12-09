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

export const listMyGroups = uid => {
  return dispatch => {
    firebase
      .database()
      .ref('Groups')
      .once('value')
      .then(snapshot => {
        let mygroups = [];
        snapshot.forEach(childItem => {
          const {key, title, numberUser, pokemon, members} = childItem.val();
          Object.entries(members).forEach(([itemKey, {id}]) => {
            if (id === uid) {
              mygroups.push({
                key,
                title,
                numberUser,
                pokemon,
              });
            }
          });
        });
        //   alert(JSON.stringify(groups));
        dispatch({
          type: 'SET_MY_GROUPS',
          payload: {
            mygroups,
          },
        });
      });
  };
};
