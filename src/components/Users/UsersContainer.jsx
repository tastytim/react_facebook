import { connect } from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  setIsFetching,
  setIsFollowingInProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from './../Common/Preloader';
import { React, Component } from "react";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getIsFetching, getIsFollowingInProgress, getPageSize, getUsers, totalCount } from "../../Redux/user-selectors";

class UsersApiComponent extends Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);   
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize); 
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            isFollowingInProgress={this.props.isFollowingInProgress}
            setIsFollowingInProgress={this.props.setIsFollowingInProgress}
          />
        )}
      </>
    );
  }
}


let mapStateProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: totalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress : getIsFollowingInProgress(state),
  };
};



export default compose(
  connect(mapStateProps,
    {setCurrentPage,
      setTotalUsersCount,
      setUsers,
      unfollow : unFollowThunkCreator,
      setIsFetching,
      setIsFollowingInProgress,
      getUsers: getUsersThunkCreator,
      follow : followThunkCreator}),
      withAuthRedirect
)(UsersApiComponent);
