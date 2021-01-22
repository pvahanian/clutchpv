import {
    SET_STATS,
    LOADING_DATA,
    CLEAR_ERRORS,
 
  } from '../types';
  import axios from 'axios';
  

  export const getUserData = (userHandle) => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/user/${userHandle}`)
      .then((res) => {
        dispatch({
          type: SET_STATS,
          payload: res.data.stats
        });
      })
      .catch(() => {
        dispatch({
          type: SET_STATS,
          payload: null
        });
      });
  };
  
  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };