import React from 'react';
import { connect } from 'react-redux';
import './posts.css'
import fetchPosts from './redux/dispatchers/fetchPosts';
const Posts = (props) => {
    if (!props.posts.isLoaded) {
        props.fetchPosts()
    }
    return (
        <div>
            <h1>Posts</h1>
            <div>
                {props.posts.isLoaded ? props.posts.posts.map(post => <p key={post.id}>{post.title}</p>) : null}
            </div>
        </div>
    )
}
const mapStateToProps = (state => ({ posts: state.posts }))
const mapDispatchToProps = (dispatch => ({
    fetchPosts: fetchPosts(dispatch)
}))
export default connect(mapStateToProps, mapDispatchToProps)(Posts)