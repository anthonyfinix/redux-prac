import getPosts from '../api/getPosts';
import initialState from './initialState';
import types from './types';
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return { ...state, posts: action.payload,isLoaded:true }
        default:
            return { ...state }
    }
}

export default postReducer