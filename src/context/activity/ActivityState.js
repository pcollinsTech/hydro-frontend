import React, { useReducer } from "react";
// import axios from "axios";
import ActivityContext from "./activityContext";
import ActivityReducer from "./ActivityReducer";
import { GET_ACTIVITIES, GET_ACTIVITY, SET_LOADING } from "../types";
import { activityData } from "./activitys";

const ActivityState = (props) => {
  const inititalState = {
    activity: {},
    activities: [],
    loadding: false,
  };

  const [state, dispatch] = useReducer(ActivityReducer, inititalState);

  const setLoading = () => dispatch({ type: SET_LOADING });
  // Search Users
  const getPosts = async () => {
    setLoading();
    dispatch({
      type: GET_ACTIVITIES,
      payload: activityData,
    });
  };
  const getPost = async (id) => {
    setLoading();
    const post = activityData.filter((post) => post.id === id);
    dispatch({
      type: GET_ACTIVITY,
      payload: post,
    });
  };

  // Set Loading
  return (
    <ActivityContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        getPosts,
        getPost,
        setLoading,
      }}
    >
      {props.children}
    </ActivityContext.Provider>
  );
};

export default ActivityState;
