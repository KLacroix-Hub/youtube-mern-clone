import express from 'express'
import { addComment, deleteComment, getComment } from "../controllers/comment.js"
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

//Add a comment to a video
router.post('/', verifyToken, addComment )
//Delete a comment to a video
router.delete('/:id', verifyToken, deleteComment )
//get a comment to a video
router.get('/:videoId', getComment )

export default router;