import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  const payload = await req.body;
  payload["authorId"] = req.user?.id;
  const result = await PostService.createPost(payload);

  res.status(201).json(result);
};

const getAllPosts = async (req: Request, res: Response) => {
  const { search } = req.query;
  const searchStr = typeof search === "string" ? search : "";
  const result = await PostService.getAllPosts(searchStr);
  res.status(200).json(result);
};

export const PostController = {
  createPost,
  getAllPosts,
};
