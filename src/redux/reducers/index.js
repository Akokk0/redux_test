import {combineReducers} from "redux";
import count from "./count.js";
import persons from "./person.js";

export default combineReducers({
    count,
    persons
})
