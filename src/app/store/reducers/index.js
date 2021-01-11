import { combineReducers } from "redux";
import iecho from "./iecho.reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    iecho,
    ...asyncReducers,
  });

export default createReducer;
