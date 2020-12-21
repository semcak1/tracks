import React from "react";
import createDataContext from "./createDataContext";

const LocationReducer = (state, action) => {
  switch (action.type) {
    case "add_cuurent_location":
      return {...state,currentLocation : action.payload};
    default:
      return state;
  }
};

const startRecording = (dispatch) => {
  return () => {};
};
const stopRecording = (dispatch) => {
  return () => {};
};
const addLocation = (dispatch) => {
  return (location) => {
      console.log('Hi there')
      dispatch({type:'add_current_location',payload:location})
  };
};

export const { Context, Provider } = createDataContext(
  LocationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
