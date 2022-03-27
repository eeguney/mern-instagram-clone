import * as actionType from "../../constants/Actions";

const fetchAllPostsbyPublicProfile = (data) => async (dispatch) => {
    try {
        dispatch({ type: actionType.FETCHALLPOSTBYPUBLICPROFILE, data });
        return data
      } catch (err) {
        return err.response.data
      }
};


export { fetchAllPostsbyPublicProfile };
