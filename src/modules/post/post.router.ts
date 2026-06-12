import { Router } from "express";
import { PostController } from "./post.controller";
import { authenticate } from "../../middlewares/authenticate";
import { UserRole } from "../../enum";

const router = Router();

router.get("/", PostController.getAllPosts);
router.post("/", authenticate(UserRole.USER, UserRole.ADMIN), PostController.createPost);

export const postRouter = router;
