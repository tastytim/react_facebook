import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import { followUser, unfollowUser } from "../api/api";
import { follow } from "../../Redux/users-reducer";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p, index) => {
          return (
            <span
              key={index}
              className={props.currentPage === p ? s.selectedPage : ""}
              onClick={() => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.users_container}>
          <span>
            <NavLink to={"/profile/" + u.id}>
              <div>
                <img
                  className={s.userPhoto}
                  src={u.photos.small ? u.photos.small : userPhoto}
                  alt={userPhoto}
                />
              </div>
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={props.isFollowingInProgress.some(id=>id===u.id)}
                  className="btn btn-primary my-2"
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                disabled={props.isFollowingInProgress.some(id=>id===u.id)}
                  className="btn btn-primary my-2"
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
            </span>
          </span>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default Users;
