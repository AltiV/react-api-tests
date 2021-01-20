import axios from "axios";
// import mongoose from 'mongoose'
// import PostMessage from '../models/postMessage.js'

// URL: https://api.musixmatch.com/ws/1.1/chart.artists.get?apikey=f497659d18b946e60bae1af18f62ac13&page=1&page_size=3&country=CA

export const getData = (req, res) => {
  // GET requests data is retrieved from req.query instead of req.body
  const { category } = req.query;

  // Build the URL
  let url = `${process.env.URL_MUSIXMATCH}/${category}?apikey=${process.env.API_KEY_MUSIXMATCH}`;

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
