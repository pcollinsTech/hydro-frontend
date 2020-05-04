import React, { useReducer } from "react";
// import axios from "axios";
import PostContext from "./postContext";
import PostReducer from "./PostReducer";
import { GET_POSTS, GET_POST, SET_LOADING } from "../types";
import { postData } from "./posts";
const PostState = props => {
  const inititalState = {
    post: {},
    posts: [],
    loadding: false
  };

  const [state, dispatch] = useReducer(PostReducer, inititalState);

  const setLoading = () => dispatch({ type: SET_LOADING });
  // Search Users
  const getPosts = async () => {
    setLoading();
    // const res = await axios.get(`http://api.crypto.local/api/posts`);
    dispatch({
      type: GET_POSTS,
      payload: postData
    });
  };
  const getPost = async id => {
    setLoading();
    // const res = await axios.get(`http://api.crypto.local/api/post/${slug}`);
    const post = postData.filter(post => post.id === id);
    dispatch({
      type: GET_POST,
      payload: post
    });
  };

  // Set Loading
  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        getPosts,
        getPost,
        setLoading
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
