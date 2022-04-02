import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bb161b3e-0981-4655-909e-edfebf28edc1",
  },
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((resp) => {
      return resp.data;
    });
};
export const followUser = (userId) => {
  return instance.post(`follow/${userId}`).then((resp) => {
    return resp.data.resultCode;
  });
};
export const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`).then((resp) => {
    return resp.data.resultCode;
  });
};

export const loginUser = () => {
  return instance.get("auth/me").then((resp) => {
    return resp.data;
  });
};

export const getProfile = (userId) => {
  return instance.get('profile/' +  userId).then(resp => {
    return resp.data;
  });
};
