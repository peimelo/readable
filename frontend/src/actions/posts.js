import * as BlogAPI from '../utils/BlogAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => dispatch => {
  return BlogAPI
    .getPosts()
    .then(posts => dispatch(receivePosts(posts)))
}
