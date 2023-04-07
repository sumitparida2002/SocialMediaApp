import axios from "axios";

const url = "http://localhost:5000";

export const fetchPost = () => axios.get(`${url}/post`);
export const fetchUserPost = (user) => axios.post(`${url}/post/users`, user);

export const createPost = (newPost) => axios.post(`${url}/post`, newPost);
export const createUser = (newUser) =>
  axios.post(`${url}/user/create`, newUser);

export const Login = (user) =>
  axios.post(`${url}/user/login`, user, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
export const Logout = (user) => axios.post(`${url}/user/logout`, user);

export const likePost = (postID) => axios.put(`${url}/post/like`, postID);
export const getLikes = (user) => axios.get(`${url}/user/userLikes`, user);
