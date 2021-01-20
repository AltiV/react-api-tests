import axios from "axios";
// import mongoose from 'mongoose'
// import PostMessage from '../models/postMessage.js'

export const getData = (req, res) => {
  // GET requests data is retrieved from req.query instead of req.body
  const { category, searchValue } = req.query;

  // Build the URL
  let url = `${process.env.URL_MUSIXMATCH}/${category}?apikey=${process.env.API_KEY_MUSIXMATCH}`;

  // Generic addition of search parameter; to be greatly expanded on
  if (category === "artist.search") {
    url += `&q_artist=${searchValue}`;
  } else if (category === "track.search") {
    url += `&q_track=${searchValue}`;
  }

  axios
    .get(url)
    .then((response) => {
      res.status(200).send(response.data.message);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

// export const getPosts = async (req, res) => {
//   try {
//     const postMessages = await PostMessage.find()

//     res.status(200).json(postMessages)
//   } catch (error) {
//     res.status(404).json({ message: error.message })
//   }
// };

// export const createPost = async (req, res) => {
//   const post = req.body

//   const newPost = new PostMessage(post)

//   try {
//     await newPost.save()

//     res.status(201).json(newPost)
//   } catch (error) {
//     res.status(409).json({ message: error.message })
//   }
// }

// export const updatePost = async (req, res) => {
//   const { id: _id } = req.params
//   const post = req.body

//   if (!mongoose.Types.ObjectId.isValid(_id))
//     return res.status(404).send('No post with that id')

//   const updatedPost = await PostMessage.findByIdAndUpdate(
//     _id,
//     { ...post, _id },
//     {
//       new: true
//     }
//   )

//   res.json(updatedPost)
// }

// export const deletePost = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send('No post with that id')

//   await PostMessage.findByIdAndRemove(id)

//   res.json({ message: 'Post deleted successfully' })
// }

// export const likePost = async (req, res) => {
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send('No post with that id')

//   const post = await PostMessage.findById(id)
//   const updatedPost = await PostMessage.findByIdAndUpdate(
//     id,
//     { likeCount: post.likeCount++ },
//     { new: true }
//   )

//   res.json(updatedPost)
// }
