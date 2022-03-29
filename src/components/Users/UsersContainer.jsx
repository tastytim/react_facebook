import { connect } from "react-redux";
import {
  followAc,
  setCurrentPageAc,
  setTotalUsersCountAc,
  setUsersAc,
  unfollowAc,
  setIsFetchingAc,
} from "../../Redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "./../Common/Preloader";
import { React, Component } from "react";

class UsersApiComponent extends Component {
  componentDidMount() {
    this.props.setIsFetchingAc(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items);
        this.props.setTotalUsersCount(resp.data.totalCount);
        this.props.setIsFetchingAc(false);
      });
  }

  onPageChanged = (p) => {
    this.props.setIsFetchingAc(true);
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((resp) => {
        this.props.setUsers(resp.data.items);
        this.props.setIsFetchingAc(false);
      });
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
          />
        )}
      </>
    );
  }
}

let mapStateProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect( mapDispatchProps , {
    follow: followAc,
    unfollow: unfollowAc,
    setUsers: setUsersAc,
    setCurrentPage: setCurrentPageAc,
    setTotalUsersCount: setTotalUsersCountAc,
    setIsFetchingAc: setIsFetchingAc })(UsersContainer);




