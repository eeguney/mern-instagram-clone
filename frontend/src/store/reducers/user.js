import * as actionType from "../../constants/Actions";

const initialState = {
  token: localStorage.getItem("token"),
  _id: null,
  fullname: null,
  username: null,
  profilePhoto: null,
  email: null,
  isLogged: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SIGNIN:
      console.log(action.data)
      localStorage.setItem("token", action.data.accessToken);
      localStorage.setItem("firstLogin", true);
      window.setTimeout(() => {
        localStorage.removeItem("token");
      }, 3 * 24 * 3600 * 1000);
      return {
        _id: action.data._id,
        fullname: action.data.fullname,
        username: action.data.username,
        profilePhoto: action.data.profilePhoto,
        email: action.data.email,
        token: JSON.stringify({ ...action?.data }),
        isLogged: true,
      };
      case actionType.USER_LOADED:
      return {
        ...state,
        _id: action.user._id,
        token: action.user.token,
        fullname: action.user.fullname,
        username: action.user.username,
        profilePhoto: action.user.profilePhoto,
        email: action.user.email,
        isLogged: true,
      };
      case actionType.SET_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default userReducer;
