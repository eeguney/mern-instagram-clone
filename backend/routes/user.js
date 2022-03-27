import express from "express"
// controller imports
import { signUp, signIn, fetchAnUser, updateAnUser, checkNumberOrEmailExist } from "../controllers/userController.js"

import verifyToken from "../middlewares/verifyToken.js"

const router = express.Router()

// routers
router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/:id', fetchAnUser)
router.post('/isexist', checkNumberOrEmailExist)
router.put('/:id', verifyToken, updateAnUser)

export default router;