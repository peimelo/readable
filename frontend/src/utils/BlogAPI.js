import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories = () =>
  axios({
    method: 'GET',
    url: `${api}/categories`,
    headers
  }).then(res => res.data);

export const getCategoryPosts = category =>
  axios({
    method: 'GET',
    url: `${api}/${category}/posts`,
    headers
  }).then(res => res.data);

export const getPost = id =>
  axios({
    method: 'GET',
    url: `${api}/posts/${id}`,
    headers
  }).then(res => res.data)
    .catch(err => console.log(err));

export const getPosts = () =>
  axios({
    method: 'GET',
    url: `${api}/posts`,
    headers
  }).then(res => res.data);

export const getComments = (id) =>
  axios({
    method: 'GET',
    url: `${api}/posts/${id}/comments`,
    headers
  }).then(res => res.data);
