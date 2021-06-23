import { Text } from "react-native";
import Post from "../../repository/models/Post";

export default interface PostVM {
    id: string,
    createdAt: number,
    title: string,
    description: string,
    text: string,

    createdAtLabel: string,
}

export const PostToVM = function(posts: Array<Post>):Array<PostVM> {
    // enrich fields of model with labels to get viewModel
    return posts.map((post: Post) => ({
      ...post,
      createdAtLabel: new Date(post.createdAt * 1000).toDateString(),
    }))
   }