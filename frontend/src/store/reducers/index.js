import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
import story from "./story";
export const reducers = combineReducers({ user, post, story });
