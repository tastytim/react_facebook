import { UsersApi } from "../components/api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      };
    }
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalCount: action.totalUsers,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingInProgress: action.isFollowInProgress
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (totalUsers) => ({
  type: SET_TOTAL_USERS,
  totalUsers,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setIsFollowingInProgress = (isFollowInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFollowInProgress,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    UsersApi.getUsers(currentPage, pageSize).then((resp) => {
      dispatch(setUsers(resp.items));
      dispatch(setTotalUsersCount(resp.totalCount));
      dispatch(setIsFetching(false));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingInProgress(true, userId));
    UsersApi.followUser(userId).then((resp) => {
      if (resp === 0) {
        dispatch(follow(userId));
      }
      dispatch(setIsFollowingInProgress(false, userId));
    });
  };
};
export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowingInProgress(true, userId));
    UsersApi.unfollowUser(userId).then((resp) => {
      if (resp === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(setIsFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
