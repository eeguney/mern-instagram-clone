import axios from "axios";
import { CLOUDNAME } from "../constants/Cloudinary";

const token = localStorage.getItem("token");

const APIwHeader = axios.create({
  baseURL: "YOUR_API_ADRESS/api,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: `Bearer ${token}`,
  },
});

const API = axios.create({
  baseURL: "YOUR_API_ADRESS/api",
  withCredentials: false,
});

export const checkEmailORNumber = (form) => API.post("/user/isexist", form);
export const signup = (form) => API.post("/user/signup", form);
export const signin = (form) => API.post("/user/signin", form);
export const fetchAnUser = (id) => APIwHeader.get("/user/" + id, id);
export const getAllPostsbyPublicProfile = () => APIwHeader.get("/post/get");
export const uploadtoCloudinary = (data) => axios.post(`https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`, data);
export const addPost = (userID, data) => APIwHeader.post("/post/" + userID, data);
export const addStory = (userID, data) => APIwHeader.post("/story/" + userID, data);
export const getAllStoriesbyPublicProfile = () => APIwHeader.get("/story/get");
