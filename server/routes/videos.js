import express from 'express'
import { addVideo, updateVideo,deleteVideo, getVideo, addView, trend, random, sub, search, getByTag } from "../controllers/video.js"
import { verifyToken } from '../verifyToken.js';

const router = express.Router()

//create a video
router.post("/", verifyToken, addVideo )
//update a video
router.put("/:id", verifyToken, updateVideo)
//delete a video
router.delete("/:id", verifyToken, deleteVideo)
//get a video
router.get("/find/:id", getVideo)

// Add a view to a video
router.put("/view/:id", addView)
//get trend videos
router.get("/trend", trend)
//get random videos
router.get("/random", random)
//get only subscribed videos
router.get("/sub",verifyToken, sub)
//get videos by tag
router.get("/tags",verifyToken, getByTag)
//search videos
router.get("/search",verifyToken, search)

export default router;