import sanitize from 'mongo-sanitize';
import joi from 'joi';

import Post from "../models/post.js";
import User from "../models/user.js";

/* 📜 Validation Schemas 📜 */
const postSchema = joi.object({
    userId: joi.string().required(),
    description: joi.string().max(500),
    picturePath: joi.string().uri()
});

/* 🖊 Create 🖊 */
export const createPost = async (req, res) => {
    try {
        const result = postSchema.validate(req.body);
        if (result.error) {
            return res.status(400).json({ message: "Invalid input." });
        }

        const { userId, description, picturePath } = req.body;

        const sanitizedUserId = sanitize(userId);
        const user = await User.findById(sanitizedUserId);

        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }

        const postData = {
            userId: sanitizedUserId,
            description,
            likes: {},
            comments: [],
        };

        if (picturePath) {
            postData.picturePath = picturePath;
        }

        const newPost = new Post(postData);
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: "Unable to create the post at this time. Please try again later." });
    }
};

/* 👓 Read 👓 */
export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch the posts at this time. Please try again later." });
    }
};

export const getUserPosts = async (req, res) => {
    try {
        const userId = sanitize(req.params.userId);
        const posts = await Post.find({ userId });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch the user posts at this time. Please try again later." });
    }
};

/* 🔄 Update 🔄 */
export const likePost = async (req, res) => {
    try {
        const id = sanitize(req.params.id);
        const userId = sanitize(req.body.userId);

        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: "Unable to process your request at this time. Please try again later." });
    }
};
