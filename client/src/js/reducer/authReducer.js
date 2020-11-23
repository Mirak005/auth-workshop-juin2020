import {
  LOGIN_USER,
  LOGOUT,
  GET_AUTH_USER,
  REGISTER_USER,
  AUTH_ERROR,
  SET_LOADING,
} from "../const/actionTypes";

const initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  isLoading: true,
  msg: null,
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuth: false,
        isLoading: false,
      };
    case LOGIN_USER:
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, isLoading: false, isAuth: true, ...payload };
    case GET_AUTH_USER:
      return { ...state, isLoading: false, isAuth: true, ...payload };
    default:
      return state;
  }
}
