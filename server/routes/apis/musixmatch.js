import express from "express";

import {
  getData,
  //   createPost,
  //   updatePost,
  //   deletePost,
  //   likePost
} from "../../controllers/apis/musixmatch.js";

const router = express.Router();

router.get("/", getData);
// // router.post('/', createPost)
// // router.patch('/:id', updatePost)
// // router.delete('/:id', deletePost)
// // router.patch('/:id/likePost', likePost)

export default router;
