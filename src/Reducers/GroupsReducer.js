const initialState = {
  nickName: '',
  groups: [
    {
      key: 240,
    },
  ],
  myGroups: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {...state, nickName: action.payload.nickName};
      break;
    case 'SET_GROUPS':
      return {...state, groups: action.payload.groups};
      break;
    case 'SET_MY_GROUPS':
      return {...state, myGroups: action.payload.mygroups};
      break;
  }

  return state;
};
