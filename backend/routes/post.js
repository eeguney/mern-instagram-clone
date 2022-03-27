import express from "express"
// controller imports
import { addPost, getAPostWithUserInfo, getAllPostByUserID, getAllPostsbyPublicProfile } from "../controllers/postController.js"

import verifyToken from "../middlewares/verifyToken.js"

const router = express.Router()

// routers
router.post('/:userID', verifyToken, addPost)
router.get('/get', verifyToken, getAllPostsbyPublicProfile)
router.get('/get/:postID', verifyToken, getAPostWithUserInfo)
router.get('/get/:userID', verifyToken, getAllPostByUserID)

export default router;