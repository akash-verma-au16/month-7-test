import { userTypes } from '../actionTypes';
import { axios } from '../config';

const userAction = {
  getUsers: () => (dispatch) => {
    return axios({
      method: 'get',
      url: 'users',
    }).then((resp) => {
      dispatch({ type: userTypes.get, payload: resp.data });
    });
  },
  setCurrentUser: (user) => (dispatch) =>
    dispatch({ type: userTypes.set, payload: user }),
};

export default userAction;
