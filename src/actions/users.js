import * as api from "../api";

export async function createUser(user) {
  try {
    const { data } = await api.createUser(user);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getUserLikes(user) {
  try {
    const { data } = await api.getLikes(user);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function login(user) {
  try {
    const { data } = await api.Login(user);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function logout(user) {
  try {
    const { data } = await api.Logout(user);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
