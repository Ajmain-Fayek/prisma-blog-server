import { PostStatus } from "../../../generated/prisma/client";

export interface PostPayload {
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured?: boolean;
  status?: PostStatus;
  tags?: string[];
}
