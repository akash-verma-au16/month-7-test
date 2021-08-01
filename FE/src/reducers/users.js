import { userTypes } from '../actionTypes';

const initialData = {
  lists: [],
  current: {},
};

const users = (state, action) => {
  state = state || initialData;
  switch (action.type) {
    case userTypes.get:
      return { ...state, lists: action.payload };

    case userTypes.set:
      return { ...state, current: action.payload };

    default:
      return state;
  }
};

export default users;
