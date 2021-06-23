import axios from 'axios'
import { useQuery } from 'react-query'
import PostVM, { PostToVM } from './viewModels/PostVM'
import { getPosts, getPost } from '../repository'
import Post from '../repository/models/Post';

export default function useGetPosts(postId) {
  return useQuery<PostVM[], Error>(
    'posts',
    () => getPost(postId)
    .then(
      PostToVM,
    ),
  );
  }