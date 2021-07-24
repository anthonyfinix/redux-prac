import { combineReducers } from "redux";
import postReducer from '../posts/redux/reducer';
const rootReducer = combineReducers({
    posts:postReducer
})

export default rootReducer;