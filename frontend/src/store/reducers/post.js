import * as actionType from "../../constants/Actions";

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCHALLPOSTBYPUBLICPROFILE:
      return {
        posts: action.data
      };
    default:
      return state;
  }
};

export default postReducer;
