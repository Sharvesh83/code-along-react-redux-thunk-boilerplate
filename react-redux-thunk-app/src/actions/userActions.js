import axios from 'axios';

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: 'FETCH_USER_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_USER_FAILURE',
        payload: error.message,
      });
    }
  };
};
