import * as api from "../api";

export async function getPosts() {
  try {
    const { data } = await api.fetchPost();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getUserPosts(user) {
  try {
    const { data } = await api.fetchUserPost(user);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createPost(post) {
  try {
    const { data } = await api.createPost(post);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function like(postID) {
  try {
    const { data } = await api.likePost(postID);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
