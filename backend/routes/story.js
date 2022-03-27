import express from "express"
// controller imports
import { addStory, getAllStoriesbyPublicProfile } from "../controllers/storyController.js"

import verifyToken from "../middlewares/verifyToken.js"

const router = express.Router()

// routers
router.post('/:userID', verifyToken, addStory)
router.get('/get', verifyToken, getAllStoriesbyPublicProfile)

export default router;