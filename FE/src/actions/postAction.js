import { postTypes } from '../actionTypes';
import { axios } from '../config';

const postAction = {
  getPosts: () => (dispatch) =>
    axios({
      method: 'get',
      url: 'posts',
    }).then((resp) => {
      dispatch({ type: postTypes.get, payload: resp.data });
    }),
  setCurrentPost: (id) => (dispatch) =>
    axios({
      method: 'get',
      url: `posts/${id}`,
    }).then((resp) => {
      dispatch({ type: postTypes.set, payload: resp.data });
    }),
};

export default postAction;
