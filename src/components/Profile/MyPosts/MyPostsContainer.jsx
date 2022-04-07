import { connect } from "react-redux";
import { addPostThunkCretator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPostThunkCretator,
})(MyPosts);

export default MyPostsContainer;
