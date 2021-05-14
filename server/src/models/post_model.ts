import mongoose from "mongoose";
import {IPost} from "../types/app_types";

export const PostSchema: mongoose.Schema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: {type: String, required: true }
});

export const Post = mongoose.model<IPost>("Post", PostSchema);

