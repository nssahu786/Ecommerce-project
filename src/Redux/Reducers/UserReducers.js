import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_ERRORS,
} from "../Constants/UserConstants";

export const authReducer = (state = { user: {} }, action) => {

  //console.log(action.payload)

    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      };
      case LOGIN_FAILED:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

      default:
        return state;
  }
};
