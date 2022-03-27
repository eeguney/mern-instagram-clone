import * as actionType from "../../constants/Actions";

const fetchAllStoriesbyPublicProfile = (data) => async (dispatch) => {
    try {
        dispatch({ type: actionType.FETCHALLSTORYBYPUBLICPROFILE, data });
        return data
      } catch (err) {
        return err.response.data
      }
};


export { fetchAllStoriesbyPublicProfile };
