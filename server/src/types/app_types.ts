import * as mongoose from "mongoose";

export interface IPost extends mongoose.Document {
    title: string;
    author: string;
    content: string;
}