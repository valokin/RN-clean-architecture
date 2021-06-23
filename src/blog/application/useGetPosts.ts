import axios from 'axios'
import { useQuery } from 'react-query'
import PostVM, { PostToVM } from './viewModels/PostVM'
import { getPosts } from '../repository'
import Post from '../repository/models/Post';

export default function useGetPosts() {
  return useQuery<PostVM[], Error>(
    'posts',
    () => getPosts()
    .then(
      PostToVM,
    ),
  );
  }