import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

axios.defaults.headers.common['Authorization'] = token;

// Categories
export const getCategories = () =>
  axios.get(`${api}/categories`)
    .then(res => res.data);

// Comments
export const createComment = comment =>
  axios.post(`${api}/comments`, comment)
    .then(res => res.data);

export const deleteComment = id =>
  axios.delete(`${api}/comments/${id}`)
    .then(res => res.data);

export const editComment = comment =>
  axios.put(`${api}/comments/${comment.id}`, comment)
    .then(res => res.data);

export const getComment = id =>
  axios.get(`${api}/comments/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export const voteComment = (id, vote) =>
  axios.post(`${api}/comments/${id}`, { option: vote })
    .then(res => res.data);

// Posts
export const createPost = post =>
  axios.post(`${api}/posts`, post)
    .then(res => res.data);

export const deletePost = id =>
  axios.delete(`${api}/posts/${id}`)
    .then(res => res.data);

export const editPost = post =>
  axios.put(`${api}/posts/${post.id}`, post)
    .then(res => res.data);

export const getCategoryPosts = category =>
  axios.get(`${api}/${category}/posts`)
    .then(res => res.data);

export const getPost = id =>
  axios.get(`${api}/posts/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export const getPostComments = id =>
  axios.get(`${api}/posts/${id}/comments`)
    .then(res => res.data);

export const getPosts = () =>
  axios.get(`${api}/posts`)
    .then(res => res.data);

export const votePost = (id, vote) =>
  axios.post(`${api}/posts/${id}`, { option: vote })
    .then(res => res.data);
