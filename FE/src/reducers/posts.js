import { postTypes } from '../actionTypes';

const initialData = {
  lists: [],
  current: {},
};

const posts = (state, action) => {
  state = state || initialData;
  switch (action.type) {
    case postTypes.get:
      return { ...state, lists: action.payload };

    case postTypes.set:
      return { ...state, current: action.payload };

    default:
      return state;
  }
};

export default posts;
