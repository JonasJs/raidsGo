const initialState = {
  nickName: '',
  uid: 'jonas',
  status: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {...state, nickName: action.payload.nickName};
      break;
    case 'SET_INFOS':
      return {
        ...state,
        email: action.payload.email,
        nickName: action.payload.nickName,
      };
      break;
    case 'SET_UID':
      return {...state, status: 1, uid: action.payload.uid};
      break;
    case 'SET_UID':
      return {...state, status: action.payload.status};
      break;
  }

  return state;
};
