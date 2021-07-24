import getPosts from "../../api/getPosts";
import types from "../types";

export default (dispatch) => {
    return () => {
        getPosts()
            .then(response => {
                dispatch({ type: types.FETCH_POSTS, payload: response.data })
            })
    }
}