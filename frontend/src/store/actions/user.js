import * as actionType from "../../constants/Actions";
import jwtDecode from "jwt-decode";
import { fetchAnUser } from "../../api";

const signIn = (data) => async (dispatch) => {
    try {
        dispatch({ type: actionType.SIGNIN, data });
        return data
      } catch (err) {
        return err.response.data
      }
};

const loadUser = () => async (dispatch, getState) => {
    const token = getState().user.token
    const {id} = jwtDecode(token);
    const { data } = await fetchAnUser(id);
    const { msg } = data
    const { _id, fullname, username, email, profilePhoto } = msg
    const user = { _id, fullname, username, email, profilePhoto, token }
    if(user) {
      dispatch({
        type: actionType.USER_LOADED,
        user
      })

    }
};

const setLogged = () => (dispatch) => {};

export { signIn, loadUser, setLogged };
