import * as actionType from "../../constants/Actions";

const initialState = {
  stories: []
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCHALLSTORYBYPUBLICPROFILE:
      return {
        stories: action.data
      };
    default:
      return state;
  }
};

export default storyReducer;
