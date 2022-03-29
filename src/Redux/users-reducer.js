const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [
  ],
  pageSize: 5,
  totalCount:0,
  currentPage : 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }else{
            return u;
          }
          
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }else{
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
    case SET_CURRENT_PAGE : {
      return {
        ...state,
        currentPage : action.page
      }
    }
    case SET_TOTAL_USERS :
      return {
        ...state,
        totalCount : action.totalUsers
      }
     case TOGGLE_IS_FETCHING:
       return {
         ...state,
         isFetching : action.isFetching
       }
    default:
      return state;
  }
};

export const followAc = (userId) => ({ type: FOLLOW, userId });
export const unfollowAc = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAc = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCountAc = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers });
export const setIsFetchingAc = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
