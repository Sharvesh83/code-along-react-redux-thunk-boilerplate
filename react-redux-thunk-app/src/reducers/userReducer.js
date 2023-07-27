const initialState = {
    users: [],
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          users: action.payload,
          error: null,
        };
      case 'FETCH_USER_FAILURE':
        return {
          ...state,
          users: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  