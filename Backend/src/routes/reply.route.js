import { Router } from "express";
import {verifyJWT} from "../middlewares/auth.middlewares.js";
import {
    createReply,
    updateReply,
    deleteReply,
    getAllReplies
} from "../controllers/reply.controller.js";

//vbbggh


const router = Router();

router.route("/create").post(verifyJWT, createReply);
router.route("/update/:replyId").patch(verifyJWT, updateReply);
router.route("/delete/:replyId").delete(verifyJWT, deleteReply);
router.route("/getAll/:commentId").get(verifyJWT, getAllReplies);


export default router;