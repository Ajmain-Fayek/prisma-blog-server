import { PostRapository } from "./post.rapository";

const createPost = (payload: any) => {
  return PostRapository.createPost(payload);
};

const getAllPosts = (payload: string) => {
  return PostRapository.getAllPosts(payload);
};

export const PostService = {
  createPost,
  getAllPosts,
};
