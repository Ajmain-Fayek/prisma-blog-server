import { Router } from "express";
import { postRouter } from "../modules/post/post.router";

const router = Router();

router.use("/posts", postRouter);

export const IndexRouter = router;
