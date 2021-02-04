import axios from 'axios';

let baseUrl = process.env.NODE_ENV === 'production'
  ? ''
  : 'http://localhost:3001';

baseUrl += '/api';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

axios.defaults.headers.common['Authorization'] = token;

// Categories
export const getCategories = () =>
  axios.get(`${baseUrl}/categories`)
    .then(res => res.data);

// Comments
export const createComment = comment =>
  axios.post(`${baseUrl}/comments`, comment)
    .then(res => res.data);

export const deleteComment = id =>
  axios.delete(`${baseUrl}/comments/${id}`)
    .then(res => res.data);

export const editComment = comment =>
  axios.put(`${baseUrl}/comments/${comment.id}`, comment)
    .then(res => res.data);

export const getComment = id =>
  axios.get(`${baseUrl}/comments/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export const voteComment = (id, vote) =>
  axios.post(`${baseUrl}/comments/${id}`, { option: vote })
    .then(res => res.data);

// Posts
export const createPost = post =>
  axios.post(`${baseUrl}/posts`, post)
    .then(res => res.data);

export const deletePost = id =>
  axios.delete(`${baseUrl}/posts/${id}`)
    .then(res => res.data);

export const editPost = post =>
  axios.put(`${baseUrl}/posts/${post.id}`, post)
    .then(res => res.data);

export const getCategoryPosts = category =>
  axios.get(`${baseUrl}/${category}/posts`)
    .then(res => res.data);

export const getPost = id =>
  axios.get(`${baseUrl}/posts/${id}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export const getPostComments = id =>
  axios.get(`${baseUrl}/posts/${id}/comments`)
    .then(res => res.data);

export const getPosts = () =>
  axios.get(`${baseUrl}/posts`)
    .then(res => res.data);

export const votePost = (id, vote) =>
  axios.post(`${baseUrl}/posts/${id}`, { option: vote })
    .then(res => res.data);
