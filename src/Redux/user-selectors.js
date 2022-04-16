import { createSelector } from "reselect"


export const getUsers =(state)=>{
    return state.usersPage.users;
}
export const totalCount =(state)=>{
    return  state.usersPage.totalCount;
}
export const getPageSize =(state)=>{
    return state.usersPage.pageSize;
}
export const getCurrentPage =(state)=>{
    return state.usersPage.currentPage;
}
export const getIsFetching =(state)=>{
    return state.usersPage.isFetching;
}
export const getIsFollowingInProgress =(state)=>{
    return state.usersPage.isFollowingInProgress;
}


// EXAMPLE RESELECT
// export const getSuperSelectorUsers = createSelector(()=>{
//         getUsers().filter(e=>true);
// })
   


 
