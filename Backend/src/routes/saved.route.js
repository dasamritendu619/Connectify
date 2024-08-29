import { Router } from "express";
import {
    toggleSavedPosts,
    getSavedPosts
} from "../controllers/saved.controller.js"; 
import {verifyJWT} from '../middlewares/auth.middlewares.js';


const router = Router();
router.use(verifyJWT);
router.route("/toggle/:postId").post(toggleSavedPosts);
router.route("/").get(getSavedPosts);


export default router;