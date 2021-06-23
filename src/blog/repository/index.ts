import axios from 'axios';
import Post from './models/Post';


export const getPosts = 
() => axios.get('https://5ebd9842ec34e900161923e7.mockapi.io/post').then(res => res.data)


export const getPost = 
(postId: Post) => axios.get(`https://5ebd9842ec34e900161923e7.mockapi.io/${postId}`).then(res => res.data)
