import { SET_USER, LOGOUT_USER } from '../actions/userActions';
// Retrieve token and email from localStorage if they exist
const token = localStorage.getItem('token');
const email = localStorage.getItem('email');
const initialState = {
  user: token && email ? { email, token } : null, // Initialize user if token and email are present
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, 
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
