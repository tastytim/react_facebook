import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "bb161b3e-0981-4655-909e-edfebf28edc1",
  },
});

export const UsersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp) => {
        return resp.data;
      });
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((resp) => {
      return resp.data.resultCode;
    });
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((resp) => {
      return resp.data.resultCode;
    });
  },

  getProfile(userId) {
    return instance.get("profile/" + userId).then((resp) => {
      return resp.data;
    });
  },
};

export const ProfileApi = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((resp) => {
      return resp.data;
    });
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId).then((resp) => {
      return resp.data;
    });
  },
  updateStatus(status) {
    return instance.put("profile/status", {status:status}).then((resp) => {
      return resp.data;
    });
  },
};

export const AuthApi = {
  loginUser() {
    return instance.get("auth/me").then((resp) => {
      return resp.data;
    });
  },

  signIn({ login, password, rememberMe}){
    
    return instance.post("auth/login",{ email: login, password: password,rememberMe: rememberMe} ).then((resp)=>{
      return resp;
    });
  },

  logOut(){
    return instance.post("auth/logout").then((resp)=>{
      console.log(resp)
      return resp;
    });
  },
  getCaptcha(){
    return instance.get("security/get-captcha-url").then((resp)=>{
      return resp;
    });
  }


};





