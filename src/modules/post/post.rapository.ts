import { Post } from "../../../generated/prisma/client";
import { PostStatus } from "../../enum";
import { prisma } from "../../lib/prisma";
import { PostPayload } from "./types";

const createPost = async (payload: Post) => {
  return await prisma.post.create({
    data: payload,
  });
};

const getAllPosts = async (payload: string) => {
  return await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: payload,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: payload,
            mode: "insensitive",
          },
        },
        {
          tags: {
            has: payload,
          },
        },
      ],
    },
  });
};

export const PostRapository = {
  createPost,
  getAllPosts,
};
